# ADR-0001 — appview `kb0ard1x` を今はデプロイしない（上流 MCP router が不在）

- **status**: accepted
- **date**: 2026-08-14
- **scope**: `appview/etzhayyim-wasm-keyboard-kb0ard1x/`

## Context

このワークスペースでは本番デプロイは恒久承認されている（CLAUDE.md「標準作業の
常時許可」）。したがって「デプロイしない」方は判断であり、理由を残す必要がある。

2026-08-14 に実測した事実:

| 測ったもの | 結果 |
|---|---|
| `npm run build` | ✅ 通る。`.svelte-kit/cloudflare/_worker.js` を出力 |
| `npm run check`（svelte-check） | ✅ 142 files / 0 errors / 0 warnings |
| `wrangler deploy --dry-run` | ✅ 約 422.7 KiB、bindings 10 件を解決 |
| `wrangler dev` → `GET /` | ✅ HTTP 200 |
| `wrangler dev` → `POST /xrpc/<nsid>` | ❌ HTTP 500 |
| 同上、上流を到達可能な stub router に差し替え | ✅ **HTTP 200** |
| `dig +short etzhayyim.com` | `104.21.51.111` / `172.67.179.128`（ゾーンは在る） |
| `dig +short mcp.etzhayyim.com` | **(空)** |
| `dig +short kb0ard1x.etzhayyim.com` | **(空)** |
| `dig +short keyboard.etzhayyim.com` | **(空)** |

この Worker の経路は 2 本しかない:

1. `GET /*` — 静的 1 ページ（`+page.svelte`。ハードコードされた `app` オブジェクトを
   表示するだけで、`routeCount: 0` / `routes: []` / `vars: []`。製品情報も SKU も出さない）
2. `POST /xrpc/[...path]` — nsid を JSON-RPC `tools/call` に包んで
   `AGENTGATEWAY_MCP_ROUTER_URL` へ転送する中継

**2 本目の上流 `mcp.etzhayyim.com` が解決しない。** `+server.ts` の `fetch` に
`try` が無いため、例外がそのまま抜けて SvelteKit の
`{"message":"Internal Error"}` / HTTP 500 になる（ローカルで再現済み）。

**この診断は両方向で確かめた。** `--var` で到達可能な stub router を指すと、
同じ POST が HTTP 200 と `{"ok":true,"tool":"com.etzhayyim.apps.keyboard.product",
"args":{"sku":"KB-SPLIT-60-FIDO"}}` を返す。つまり中継の実装（nsid → tool 名、
body → arguments、`result.structuredContent` の剥がし）は正しく、
**欠けているのは上流だけ**。手順は `docs/operator-quickstart.md` §4。

## Decision

**この appview をデプロイしない。** 理由は 3 つとも「デプロイしても何も得られない」
という同じ形をしている:

1. **唯一の動的経路が構造的に 500 を返す。** 設定ミスではなく上流の不在なので、
   デプロイ先を変えても直らない。
2. **静的経路が製品を何も語らない。** `+page.svelte` は scaffold のままで、
   `CLAUDE.md` と設計書が持っている SKU・BOM・CTO オプションを 1 つも出さない。
   デプロイすると「KB-SPLIT の公式サイト」の名前で空の scaffold が公開される。
3. **ホスト名が repo 内で 2 通りある。** `CLAUDE.md` は `keyboard.etzhayyim.com`、
   `wrangler.jsonc` の `routes` は `kb0ard1x.etzhayyim.com/*`、`kotodama.jsonld` の
   `routes` は `keyboard.etzhayyim.com`。どちらを正とするか未決のままデプロイすると、
   後から DNS を張った側が黙って死ぬ。

## Consequences

- この repo の現在地は「**設計正本 + ビルドは通るがデプロイされていない appview**」
  であり、README と `docs/operator-quickstart.md` はそう書く。
  `CLAUDE.md` 冒頭の `**URL**: https://keyboard.etzhayyim.com` は**願望であって
  現状ではない** —— この ADR がその差を記録する。
- ローカル検証（`wrangler dev`）は上流なしで完結する範囲まで可能で、
  quickstart §4 がその境界を明示する。
- **デプロイの前提条件**（これが揃うまで判断は変わらない）:
  1. `mcp.etzhayyim.com` が解決し、`com.etzhayyim.mcp.message` に応答すること
  2. `+page.svelte` が設計書の SKU / CTO を実データから出すこと
  3. ホスト名を 1 つに決め、`CLAUDE.md` / `wrangler.jsonc` / `kotodama.jsonld` を揃えること
- **今回直さなかったもの**: `+server.ts` の `fetch` を `try` で囲んで 502 +
  診断メッセージにすれば 500 より読みやすくなるが、それは appview の挙動変更で
  あってこの iteration（docs）の範囲外。上流が立つときに合わせて入れる。

## Alternatives considered

- **今デプロイして DNS だけ張る** — 却下。`/xrpc/*` が 500 を返す surface が
  `keyboard.etzhayyim.com` の名前で公開される。CLAUDE.md が「壊れたら正直に報告して
  戻す」と言う以前に、壊れると分かっているものを出すことになる。
- **上流を `mcp.etzhayyim.com` から別の router へ差し替える** — 却下。到達可能な
  代替 router をこの iteration では特定していない。当て推量のホスト名を既定値に
  焼くのは、いま在る 1 つの誤りを 2 つにするだけ。
