# 引継書

> 更新日: 2026-04-05

## 前回タスクの完了状況

### 全10記事 総チェック — Tier 1 完了、Tier 2-3 未着手

**PR#23** (`fix/article-review-tier1`) — マージ待ち

#### 完了済み: 横断施策 + Tier 1

**横断施策:**
- CLAUDE.md行数を「111行」「112行」→「150行超」に統一（claude-claude-md-guide, story-claude-code-10-mistakes）
- Claude Pro金額を「$17」→ 正確な表記に統一（story-zero-code-blog, ops-mobile-dev-environment, ops-annual-cost-13-dollars）
- 用語集ページ `setup-ai-dev-glossary.mdx` を新規作成（19用語収録）

**Tier 1 記事修正:**
- No.0 `story-zero-code-blog.mdx`: WordPress比較表の専門用語平易化、フレームワーク等の補足説明
- No.1 `setup-claude-code-getting-started.mdx`: npm/Node.js/localhost/sudoにinfo-highlight-box解説追加
- No.3 `ops-annual-cost-13-dollars.mdx`: 帯域幅/ビルド回数/SSL証明書/git pushに括弧書き補足

#### 未着手: Tier 2

| 記事 | 主な修正内容 |
|------|------------|
| No.2 `ops-mobile-dev-environment.mdx` | SSH/VPN/PAT/スコープの説明追加。通信フロー図の直後にinfo-highlight-box。`--host 0.0.0.0`の補足。MCP括弧書き。金額修正済み |
| No.5 `claude-claude-md-guide.mdx` | 行数は修正済み。Tech Stackセクションに「読み飛ばしてOK」balloon-comment追加。「ルートフォルダ」平易化 |
| No.7 `story-cursor-to-claude-code.mdx` | GUI括弧書き追加。AIモデルの補足。金額は正確で修正不要 |

#### 未着手: Tier 3

| 記事 | 主な修正内容 |
|------|------------|
| No.4 `story-free-blog-one-month.mdx` | 「デプロイ回数」→「サイト更新回数」。git push補足。「約3日」に修正 |
| No.8 `build-tailwind-with-claude-code.mdx` | 「設定ファイル」「ハイブリッド構成」の平易化。軽微 |
| No.6 `claude-prompt-tips-from-failures.mdx` | トークン消費の説明追加。Opus 4.6削除可。375px→「スマホ」並記 |
| No.9 `story-claude-code-10-mistakes.mdx` | 行数は修正済み。それ以外は品質高く修正最小限 |

### 全体方針（次セッションで参照）

- **用語対策**: 用語集ページ（作成済み）+ 記事内balloon-comment/info-highlight-box の両方併用
- **balloon-comment**: CSSに定義済みだが全記事で未使用。Tier 2から導入予定
- **計画ファイル**: `.claude/plans/abstract-moseying-seahorse.md` に詳細な記事別改善リストあり
- **各記事修正後のチェック**: `pnpm dev` → プレビュー確認 → レスポンシブ（375px/768px/1280px）→ MDX太字ルール確認

---

## 現在のプロジェクト状況

- PR#23 マージ待ち（Tier 1修正 + 用語集ページ）
- Tier 2-3 は PR#23 マージ後に新セッションで実施
- ai-failures.md / user-voice.md / blog-seeds.md の記録補完は前回完了済み
