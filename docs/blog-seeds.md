# Blog Seeds（記事ネタログ）

> 開発作業中に発見した記事ネタの自動記録。
> 記事に使用済みのエントリは ~~取り消し線~~ で消す。

---

### 2026-03-30 / ops / dev-server-host-binding
- **発見**: `--host 0.0.0.0` を付けないとTailscale経由でスマホからdev serverにアクセスできない
- **カテゴリ**: 運用（ops）
- **関連記事候補**: No.2 モバイル開発環境（追記ネタ）
- **読者価値**: モバイル開発環境を構築した後にハマる「あるある」ポイント
- **詳細**: Astroのdev serverはデフォルトでlocalhost(127.0.0.1)にバインド。Tailscale経由の接続はTailscale IPで来るため拒否される。`pnpm dev:mobile`（`astro dev --host 0.0.0.0`）で全インターフェース待ち受けにすることで解決。package.jsonに`"dev:mobile": "astro dev --host 0.0.0.0"`を追加。
- **定量データ**: package.json 1行追加、所要時間2分

### 2026-04-02 / build / shiki-code-highlight
- **発見**: Astro v5はshikiをビルトインでサポートしており、パッケージ追加なしでシンタックスハイライトを有効化できる
- **カテゴリ**: つくる（build）
- **関連記事候補**: No.4「Astro + Cloudflare Pagesで月額0円のブログを作る」、No.12「AstroでMDX記事を書く方法」
- **読者価値**: テック系ブログに必須のコードハイライトが、astro.config.mjsに3行追加するだけで完成する
- **詳細**: `astro.config.mjs` の `markdown.shikiConfig.theme` に `'github-dark'` を指定するだけ。既存CSSの `pre` スタイル（border-radius, line-height, padding）はそのまま維持され、shikiがインラインスタイルで背景色・文字色のみ上書きする。言語指定（```bash等）があればトークンごとに色分けされる
- **定量データ**: astro.config.mjs 1ファイル・3行追加、所要時間5分、追加パッケージ0
