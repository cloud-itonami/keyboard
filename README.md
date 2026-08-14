# keyboard — KB-SPLIT 人体工学 split keyboard の設計正本と appview

この repo は **`cloud-itonami/keyboard`**。名前が示すとおり主題はキーボードだが、
**ここにキーボードのファームウェアは無い**。ここが持っているのは 2 つだけ:

| 持っているもの | 場所 | 何か |
|---|---|---|
| **製品設計の正本** | `docs/260407-keyboard-ergonomic-split-fido2-design.md`（414 行）+ `CLAUDE.md` | 機構図・USB トポロジ・BOM・原価・SKU・認証（PSE / FCC Part 15 / CE / FIDO Alliance L1）・製造工程・損益分岐点 |
| **appview 1 本** | `appview/etzhayyim-wasm-keyboard-kb0ard1x/` | SvelteKit + `@sveltejs/adapter-cloudflare` の Worker。静的 1 ページ + `/xrpc/*` を MCP router へ中継するだけの薄い BFF |

**QMK/VIA/ZMK のキーマップも、CAD も、firmware source もこの repo には無い**
（`git ls-files` は 14 件で、うち実装は appview の 8 ファイルだけ）。
設計書 §8 が語る firmware は仕様であって実装ではない。

## 名乗り —— 4 面のどれか

`manifest/repository-rules.edn` の `:plane-order` でいうと **subject 面**（bare 名）。
origin（他者の仕様のミラー）でも role（`app-` / `loop-` 等）でも family でもない。
`keyboard` は機能を直接示す語なので、メタファ名（`kuro` / `kobo`）と違って
`concept-vocabulary.edn` への登録は要らない。

⚠ **repo 内の 3 つの identity が食い違っている**（この iteration では直していない）:

| 場所 | 名乗っている identity |
|---|---|
| west path（実際の所在） | `cloud-itonami/keyboard` |
| `README.edn` | `com-etzhayyim-app-keyboard` / `:kind :app` |
| `migration.edn` | destination `etzhayyim/com-etzhayyim-app-keyboard` |
| `kotodama.jsonld` / `CLAUDE.md` | `did:web:keyboard.etzhayyim.com` |

`com-etzhayyim-*` は CLAUDE.md が「org を 2 回言っている」と名指しした旧形式で、
かつ org 自体が etzhayyim → cloud-itonami へ動いている。改名は west pin と
GitHub redirect を伴うので、この repo 単独の判断で動かさない。

## 検証済みの状態（2026-08-14 に実際に走らせた）

| 何を | 結果 |
|---|---|
| `npm install`（appview/svelte） | ✅ 92 packages / 10 秒（node v26.3.0 / npm 11.16.0） |
| `npm run build` | ✅ client 781ms + server 6.04s、`.svelte-kit/cloudflare/_worker.js` を出力 |
| `npm run check`（svelte-check） | ✅ **142 files / 0 errors / 0 warnings** |
| `wrangler deploy --dry-run` | ✅ 約 422.7 KiB / gzip 94.77 KiB、bindings 10 件を解決 |
| `wrangler dev` で `GET /` | ✅ HTTP 200 / 2321 bytes |
| `wrangler dev` で `GET /nope` | ✅ HTTP 404 |
| `wrangler dev` で `POST /xrpc/<nsid>` | ❌ **HTTP 500** — 下記 |
| 同上、上流を stub router に差し替え | ✅ **HTTP 200** — 中継の実装自体は正しい |
| `https://keyboard.etzhayyim.com` | ❌ **DNS が解決しない** |
| `https://kb0ard1x.etzhayyim.com` | ❌ **DNS が解決しない** |

手順は [`docs/operator-quickstart.md`](docs/operator-quickstart.md)。
踏めなかったものは同 §4 に「踏めない」と書いてある。

### この appview は今デプロイしても働かない

唯一の動的経路 `/xrpc/[...path]` は、受け取った nsid を `tools/call` に包んで
**`mcp.etzhayyim.com` へ転送するだけ**（`+server.ts`）。ところが:

```
dig +short etzhayyim.com        → 104.21.51.111 / 172.67.179.128   (Cloudflare、ゾーンは在る)
dig +short mcp.etzhayyim.com    → (空)
dig +short kb0ard1x.etzhayyim.com → (空)
```

上流が存在しないので `fetch` が投げ、handler に catch が無いため SvelteKit の
`{"message":"Internal Error"}` / HTTP 500 になる（ローカルで再現済み）。
**中継の実装自体は正しい** —— 到達可能な stub router を `--var` で指すと
同じ POST が HTTP 200 を返し、nsid が tool 名として、body が arguments として
渡ることを確認した（手順は quickstart §4）。壊れているのは上流だけ。

経緯と「今は deploy しない」という判断は
[`docs/adr/0001-appview-not-deployed-upstream-missing.md`](docs/adr/0001-appview-not-deployed-upstream-missing.md)。

## 隣接する repo との境界

- **設計書の中の販売経路**は `okaimono.etzhayyim.com`（D2C カタログ、UNSPSC `43211706`）。
  在庫・決済・fulfillment はそちらが持ち、ここは持たない。
- **crowdfunding intent** は `kotodama.jsonld` の derive rule 経由で
  `crowdfunding.etzhayyim.com` に自動導出される設計。ここに送信コードは無い。
- **MCP 中継先** は `mcp.etzhayyim.com`（未解決）。tool の実装はここではなく router 側。

## この repo を読む順番

1. `CLAUDE.md` — 製品コンセプト・SKU・BOM 概要・actor 構成・競合比較（163 行）
2. `docs/260407-keyboard-ergonomic-split-fido2-design.md` — 上の全項目の詳細（414 行）
3. `docs/operator-quickstart.md` — appview を手元で動かす手順
4. `appview/.../kotodama.jsonld` — actor の宣言（capability / KPI / governance / derive）
