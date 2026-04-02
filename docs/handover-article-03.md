# 引き継ぎ書: 記事No.3「Claude Codeの始め方」

> 作成: 2026-04-02

## 概要

STRATEGY.md Phase 1 の3本目の記事。カテゴリ「はじめ方（setup）」。
ファイル名: `src/content/blog/setup-claude-code-getting-started.mdx`

## 記事情報

| 項目 | 内容 |
|------|------|
| タイトル案 | Claude Codeの始め方。最初のサイトが動くまでの全手順 |
| 狙うKW | Claude Code 始め方 |
| カテゴリ | はじめ方（setup） |
| 想定読者 | Claude Codeの存在は知っているが、始め方がわからない非エンジニア |
| 記事の位置づけ | No.1（体験記）で興味を持った読者が「自分もやってみよう」と思った時の受け皿 |

## 執筆方針

### CLAUDE.mdのルールに従う
- 一人称「僕」、です・ます調
- 結論ファースト
- 定量データ重視（「簡単」ではなく「15分で完了」等）
- 30-40代の非エンジニア向け

### 記事構成案（要ユーザー確認）
1. **結論**: Claude Codeがあれば、30分でWebサイトが動く
2. **必要なもの一覧**: Anthropicアカウント、Claude Max Plan（$100/月）、Mac/Windows
3. **Step 1**: Claude Codeのインストール
4. **Step 2**: 最初のプロジェクト作成（Astro初期化）
5. **Step 3**: 「トップページを作って」と伝える
6. **Step 4**: ローカルで確認（pnpm dev）
7. **まとめ**: 次に読む記事への導線（No.4 Cloudflare Pages、No.5 CLAUDE.md）

### 注意点
- Claude Codeのインストール手順はUI変更が頻繁なので、大まかな流れ+公式ドキュメントへのリンクが安全
- スクショを入れる場合は `src/assets/` にWebP形式（100KB以下）
- 既存記事（No.1, No.2）との内部リンクを設置する

## 現在のサイト状態

- **公開済み記事**: 2本（story-zero-code-blog.mdx, ops-mobile-dev-environment.mdx）
- **技術基盤**: Week 1 全タスク完了（shiki含む）
- **デプロイ**: mainにpushすればCloudflare Pagesが自動ビルド
- **フロントマター**: title, description, pubDate, category が必須（既存記事参照）

## 参考
- 記事戦略: `docs/STRATEGY.md` セクション3
- 既存記事の構成: `src/content/blog/story-zero-code-blog.mdx` を参考に
- コンポーネント: InternalLinkCard, Terminal, process-timeline 等が使える
