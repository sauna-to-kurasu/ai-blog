# 引継書：記事ブラッシュアップ作業

> 作成日: 2026-04-03

## 背景

Phase 1の記事10本が公開済み。スピード優先で書いたため、体験の深掘り・定量データ追加・読者価値の強化を目的に、1記事ずつブラッシュアップを進めている。

## 完了した作業

### 記事No.1 ブラッシュアップ（PR #8 マージ済）
- `src/content/blog/story-zero-code-blog.mdx`
- 追加したセクション：
  - WordPress時代の定量データ（15時間/記事×20記事×1年≒300時間）
  - AIコーチングの「腹落ち」の感情深掘り
  - **Cursorの限界とClaude Codeへの移行**（新セクション）
  - **奥さんの反応が変わった**（新セクション）
  - **「プロと同じ土俵で戦える」と感じた瞬間**（新セクション）

### STRATEGY.md 修正（同PR内）
- Phase 1からAdSense/Amazon/楽天をPhase 3に移動（現規模では時期尚早）
- Phase 1に「既存10記事のブラッシュアップ」を追加

## ブラッシュアップの進め方

1. 記事を読んで「ここもっと聞きたい」ポイントを5つ前後質問する
2. ユーザーが口頭（音声入力）で回答する
3. 回答を記事に反映する
4. 新しい生の声は `docs/user-voice.md` に記録する
5. `pnpm dev` で確認 → ユーザーOK → ブランチ→PR→マージ

## 次にやるべき記事

記事No.2から順に進める（公開順）：

| 優先 | No. | ファイル | タイトル |
|------|-----|---------|---------|
| 次 | 2 | `ops-mobile-dev-environment.mdx` | スマホからブログを更新する。Tailscale + Termius + Claude Code |
| | 3 | `setup-claude-code-getting-started.mdx` | Claude Codeの始め方 |
| | 4 | `story-free-blog-one-month.mdx` | 月額0円でブログを運用して1ヶ月 |
| | 5 | `claude-claude-md-guide.mdx` | CLAUDE.mdの書き方 |
| | 6 | `ops-annual-cost-1550-yen.mdx` | ブログの運用コストを年間1,550円にした方法 |
| | 7 | `story-cursor-to-claude-code.mdx` | CursorからClaude Codeに乗り換えた話 |
| | 8 | `build-tailwind-with-claude-code.mdx` | Tailwind CSSをClaude Codeに任せたら |
| | 9 | `claude-prompt-tips-from-failures.mdx` | AIに"全部お任せ"で失敗した話 |
| | 10 | `story-claude-code-10-mistakes.mdx` | 非エンジニアがClaude Codeでハマった失敗10選 |

## 参照すべきファイル

- `docs/STRATEGY.md` — 全体戦略・記事方針
- `docs/user-voice.md` — ユーザーの生の声（過去の深掘り内容）
- `~/Desktop/sauna-blog/docs/PROJECT_CONTEXT.md` — サウナブログのプロジェクトコンテキスト（AIコーチング結果等）
- `CLAUDE.md` — ブログのルール・方針

## 注意事項

- ユーザーは音声入力で回答するため、長文で濃い内容が返ってくる
- 「純粋なハウツー禁止ルール」：全記事に実体験・判断・AIの限界の可視化を必須セクションとして含める
- ブランチ→PR→マージのフローを必ず守る（main直push禁止）
- この引継書は作業完了後に削除してよい
