# operator quickstart — keyboard (appview `kb0ard1x`)

> **Updated 2026-09-04 (svelte→cljs migration):** the SvelteKit app was removed.
> The UI is now shadow-cljs + reagent + kotoba-ui (murakumo-studio構成), built
> from the repository root:
>
> ```bash
> npm install
> amu compile --target wasm32-browser app
> ```
>
> ```
> [:app] Build completed. (95 files, 44 compiled, 0 warnings, 116.95s)
> ```
>
> The build emits `web/dist/js/main.js` + `web/dist/vendor/kotoba-ui.css`, which
> `wrangler.jsonc` serves as static assets (`assets.directory: ../../web/dist`).
> The sections below describe the pre-migration SvelteKit procedure and are kept
> as the audit record.

この手順は 2026-08-14 に**実際に踏んで**書いた。踏めなかったものは
「踏めない」と書いてある（§5）。

対象は `appview/etzhayyim-wasm-keyboard-kb0ard1x/` の Worker だけ。
この repo の残りは設計文書で、実行するものが無い。

## 0. 前提

```bash
node -v && npm -v
```

実測した組み合わせ: **node v26.3.0 / npm 11.16.0** で §1〜§4 が全部通る。
git 依存が 1 つも無いので、npm registry だけで足りる（`prepare` も走らない）。

`npm install` の最後に出る次の警告は**無視してよい**:

```
npm warn allow-scripts 3 packages have install scripts not yet covered by allowScripts:
npm warn allow-scripts   esbuild@0.25.12 (postinstall: node install.js)
npm warn allow-scripts   esbuild@0.28.1 (postinstall: node install.js)
npm warn allow-scripts   workerd@1.20260811.1 (postinstall: node install.js)
```

postinstall がスキップされても、この 3 つは実行時に必要な分を自分で解決する ——
実際 §2 の build も §4 の `wrangler dev` もこの状態で通った。`npm approve-scripts`
を走らせる必要はない。

## 1. 取得と依存

```bash
git clone https://github.com/cloud-itonami/keyboard.git
cd keyboard/appview/etzhayyim-wasm-keyboard-kb0ard1x/svelte
npm install
```

期待する終わり方:

```
added 92 packages, and audited 93 packages in 10s
3 low severity vulnerabilities
```

## 2. ビルド

**このワークスペースでは `vite build` を直接起動しない**（CLAUDE.md の
repo-wide resource governor。高負荷 build は同時 1 本に制限する）:

```bash
node <superproject>/scripts/resource-guard.mjs run build -- npm run build
```

superproject の外で単体で触っているなら `npm run build` でよい。

期待する終わり方（2 段階ビルド）:

```
✓ built in 781ms      ← client
✓ built in 6.04s      ← server
> Using @sveltejs/adapter-cloudflare
  ✔ done
```

成果物が `wrangler.jsonc` の宣言と一致していることを確認する:

```bash
cd ..                                     # appview/etzhayyim-wasm-keyboard-kb0ard1x
ls svelte/.svelte-kit/cloudflare/         # _worker.js と client/ が在るはず
```

`wrangler.jsonc` は `main: svelte/.svelte-kit/cloudflare/_worker.js`、
assets は `./svelte/.svelte-kit/cloudflare/client` を指している。
**build を飛ばすとどちらも存在しない**ので、§3 以降が「設定が壊れている」ように
見える —— 先に build する。

## 3. 型検査と設定検証

```bash
cd svelte && npm run check
```

```
1786690219324 COMPLETED 142 FILES 0 ERRORS 0 WARNINGS 0 FILES_WITH_PROBLEMS
```

```bash
cd .. && npx --yes wrangler@latest deploy --dry-run --outdir /tmp/kb-dryrun
```

```
✨ Read 23 files from the assets directory .../cloudflare/client
Total Upload: 422.7 KiB / gzip: 94.77 KiB
--dry-run: exiting now.
```

（Upload の下 1 桁はビルドごとに数十バイト揺れる。23 files / gzip 94.77 KiB は安定。）

bindings が 10 件（`ASSETS` + `APP_*` 8 件 + `AGENTGATEWAY_MCP_ROUTER_URL`）
表示されれば設定は解決している。

次の警告は出るが無害:

```
▲ [WARNING] The module rule {"type":"CompiledWasm","globs":["**/*.wasm"]}
  does not have a fallback, the following rules will be ignored
```

`wrangler.jsonc` の `rules` が既定の CompiledWasm ルールを覆っているだけで、
**この appview に `.wasm` は 1 つも無い**（`git ls-files` に無い）。
消したければ `"fallthrough": true` を足す。

## 4. ローカルで動かす

```bash
npx --yes wrangler@latest dev --port 8799 --local
```

起動まで 20 秒ほどかかる。別のシェルから:

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8799/          # → 200
curl -s http://127.0.0.1:8799/ | grep -o '<title>[^<]*</title>'
#   → <title>etzhayyim-wasm-keyboard-kb0ard1x</title>
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8799/nope      # → 404
curl -s -X OPTIONS -D- http://127.0.0.1:8799/xrpc/foo | grep -i access-control
#   → allow-origin: * / allow-methods: POST,OPTIONS / allow-headers / max-age
```

ここまでが**この repo だけで完結する範囲**。

### `POST /xrpc/*` は 500 になる —— 環境の問題ではない

```bash
curl -s -X POST -H 'content-type: application/json' -d '{"sku":"KB-SPLIT-60-FIDO"}' \
  http://127.0.0.1:8799/xrpc/com.etzhayyim.apps.keyboard.product
#   → {"message":"Internal Error"}   HTTP 500
```

`wrangler dev` のログ:

```
✘ [ERROR] Uncaught Error: internal error; reference = ...
  at async Object.fetch (.../cloudflare/_worker.js:100:13)
[wrangler:info] POST /xrpc/com.etzhayyim.apps.keyboard.product 500 (16ms)
```

**原因は上流の不在**。`+server.ts` は nsid を JSON-RPC `tools/call` に包んで
`AGENTGATEWAY_MCP_ROUTER_URL`（既定 `https://mcp.etzhayyim.com/xrpc/com.etzhayyim.mcp.message`）
へ転送するが、そのホストは解決しない:

```bash
dig +short etzhayyim.com          # → 104.21.51.111 / 172.67.179.128
dig +short mcp.etzhayyim.com      # → (空)
```

`fetch` が投げ、handler に `try` が無いので SvelteKit の汎用 500 が出る。
**設定を直しても消えない**（上流が無い）。

#### 上流を差し替えれば 200 になる（実測で確認済み）

「500 は上流の不在であって、この repo の壊れではない」ことは**両方向を見て**
確かめられる。stub の router を立てる:

```bash
cat > /tmp/fake-router.cjs <<'EOF'
const http=require('http');
http.createServer((req,res)=>{let b='';req.on('data',d=>b+=d);req.on('end',()=>{
  const p=JSON.parse(b||'{}');
  res.writeHead(200,{'content-type':'application/json'});
  res.end(JSON.stringify({jsonrpc:'2.0',id:p.id,
    result:{structuredContent:{ok:true,tool:p.params&&p.params.name,args:p.params&&p.params.arguments}}}));
});}).listen(8804);
EOF
node /tmp/fake-router.cjs &
```

その router を指して dev を起動する（`--var` は wrangler に受理される。
起動ログでは値が `"(hidden)"` と表示される）:

```bash
npx --yes wrangler@latest dev --port 8803 --local \
  --var AGENTGATEWAY_MCP_ROUTER_URL:http://127.0.0.1:8804/x
```

```bash
curl -s -X POST -H 'content-type: application/json' -d '{"sku":"KB-SPLIT-60-FIDO"}' \
  http://127.0.0.1:8803/xrpc/com.etzhayyim.apps.keyboard.product
```

```json
{"ok":true,"tool":"com.etzhayyim.apps.keyboard.product","args":{"sku":"KB-SPLIT-60-FIDO"}}
```

HTTP 200。ここで分かることが 3 つある —— **中継の実装は正しい**、
**nsid がそのまま tool 名になる**、**handler は `result.structuredContent` を
剥がして返す**（`+server.ts` のとおり）。したがって 500 の原因は上流だけ。

**なお 8804 に何も立てずに `--var` だけ渡すと、やはり 500 になる**（connection
refused）。`--var` を渡したこと自体は救いにならない —— 到達可能な上流が要る。

判断の記録は [`adr/0001-appview-not-deployed-upstream-missing.md`](adr/0001-appview-not-deployed-upstream-missing.md)。

## 5. この repo からは踏めないこと

- **本番 URL の確認。** `CLAUDE.md` は `https://keyboard.etzhayyim.com` を、
  `wrangler.jsonc` の `routes` は `kb0ard1x.etzhayyim.com/*` を指すが、
  **どちらも DNS が解決しない**（ゾーン `etzhayyim.com` 自体は Cloudflare に在る）。
  つまりこの appview は**まだデプロイされていない**。
- **MCP tool の実行。** 上記のとおり router が居ないので、`/xrpc/*` の
  end-to-end は router 側が立つまで検証できない。この repo に tool の実装は無い。
- **firmware / CAD のビルド。** 設計書 §8 は QMK/VIA を、§2 は機構図を語るが、
  **source はこの repo に無い**（`git ls-files` 14 件、`.c` / `.h` / `.step` / `.scad` は 0 件）。
  設計書は仕様であって実装ではない。
- **actor の起動。** `kotodama.jsonld` は 4 つの `did:web:keyboard.etzhayyim.com*`
  actor と `component.wasm` を宣言するが、**`component.wasm` は tracked file に無い**。
  appview は actor 抜きの静的ページ + 中継としてだけ動く。

## 6. 落ちたときの読み方

| 症状 | 読み方 |
|---|---|
| `wrangler` が `main` を見つけられない | §2 の build を飛ばしている。`.svelte-kit/cloudflare/` は build 生成物で、git には無い |
| `POST /xrpc/*` が 500 | §4 のとおり上流不在。環境の問題ではない |
| `npm warn allow-scripts` | §0 のとおり無視してよい。build も dev も通る |
| CompiledWasm の WARNING | §3 のとおり無害。この appview に `.wasm` は無い |
| §1〜§4 のあと `git status` が dirty | **この repo に `.gitignore` が無い**。`node_modules/` `.svelte-kit/` `.wrangler/` `package-lock.json` が untracked で出る。全部 build 生成物なので commit しない |
