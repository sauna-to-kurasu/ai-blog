# 引継書

> 更新日: 2026-04-06

## 全記事事実確認 & ブラッシュアップ（進行中）

### 背景
- ブログ分析の結果、SEO単体では月間3,000PV達成は非現実的。X（SNS）活用が必要
- しかしSNSで拡散する前に、記事の事実誤認を修正する必要がある
- 3エージェント（SEO・SNS・収益化）による戦略ディスカッション済み → 記事修正後にSTRATEGY.md更新予定

### 戦略ディスカッション結論（3エージェント合意）
- KPIを「月間3,000PV」→「月間1,000PV + リスト50人」に修正すべき
- X（Twitter）を最優先の集客チャネルに
- 既存11記事のKW最適化 → 新記事より先
- 商品化はリスト100人超えてから

### 完了済み: セッション1 — トップページ事実確認

**修正3箇所:**
1. `すべてAIに口頭指示` → `すべてAIに音声指示`（ユーザーは全て音声入力で操作）
2. `.devドメイン代のみ` → `.devドメイン代のみ ※別途AI開発ツール代`（Claude Code月額$100が別途かかる）
3. `100点 / Lighthouseスコア / 静的生成×CDN` → `100点 / Lighthouse SEO / 検索エンジン最適化スコア`（Performance実測62点。SEOは実測100点）

**発見した事実:**
- ユーザーはClaude Codeへの指示を全て音声入力で行っている（「話しかけるだけ」は比喩ではなく事実）
- AtCoderで茶色下位の経験あり。ただし実務開発・環境構築経験はゼロ →「プログラミング経験ゼロ」はOK
- Lighthouseスコア100点はAIの捏造（再犯）。実測: Performance 62, Accessibility 90, Best Practices 100, SEO 100

**他記事への波及（後続セッションで対応必須）:**
- `ops-annual-cost-13-dollars.mdx`: Lighthouseスコア全項目100点のmerit-card → 実測値に修正
- `setup-ai-dev-glossary.mdx`: 「Lighthouseスコア100点を狙えます」→ 表現修正

### 完了済み: セッション2 — 記事No.1 事実確認

**修正6箇所:**
1. 「3〜4年前」→「4〜5年前」（読書ブログは2021-2022年頃）
2. 作業時間帯: 「朝5時に起きて」→「朝5時過ぎに起きて」、「夜21時から」→「夜21時半頃から」
3. Cursorの記述: 「一番精度の高いClaude（Sonnet）」→「精度の高いClaudeモデル」、「1ヶ月間使えなくなる」→「2〜3日で上限に達してしまう」
4. ConoHa WINGのコスト: 「月1,000円以上のサーバー代に加えて、ConoHa WINGに年間1万円以上」→「ConoHa WINGに年間約12,000円（サーバー+ドメイン込み）」
5. 「このブログで発信していくこと」リスト: 現在の戦略に合わせて5項目を全面再構成
6. シミュレーターの表現を具体化 + Pro/Max使い分けの説明追加 + 「道場」表現を削除

**追加作業:**
- docs/fact-check-log.md を新規作成（セッション間で事実確認を繰り返さないためのリファレンス）
- docs/user-voice.md に追記（モバイル体験、$100の価値、事実ドキュメント化の要望等）
- docs/ai-failures.md に追記（Cursor最高精度モデル誤記、上限期間、ConoHaコスト構造）

**ユーザーからのフィードバック:**
- 事実確認結果をドキュメント化すべき（→ fact-check-log.md で対応）
- 質問する前に既存docsを確認すること（CLAUDE.md既存ルールの再徹底）

### 完了済み: セッション3 — 記事No.2 事実確認

**修正7箇所:**
1. 構築時間「約30分」→「約1時間」（merit-card + 本文 + まとめの3箇所）
2. Claude Codeプラン「Proプラン月額¥3,400 / Google Play経由」→「Max Plan 月額$100」
3. Tailscale接続確認: ターミナルコマンド→アプリ画面でIP確認に修正
4. Claude Code認証手順: 「コードを入力」→「URLをコピー→ブラウザに貼り付け→承認ボタン」+ API従量課金の注意追記
5. スリープ対策: macOSバッテリー設定追加 + 最終解決策「MacBook 1-2cm開けっぱなし」追記
6. リモートコントロール比較: トークン消費問題の補足追加
7. Tailscale IPの確認方法をアプリ画面ベースに修正

**追加作業:**
- 個人情報管理の2層構造を導入（PROJECT_CONTEXT.md / PRIVATE_CONTEXT.md / context-management.md）
- .gitignore に PRIVATE_CONTEXT.md 追加
- CLAUDE.md に個人情報管理ルール追記
- docs/fact-check-log.md にセッション3の確認事実を追記
- docs/ai-failures.md にプラン誤記・認証手順・スリープ対策の記録を追記
- docs/user-voice.md にスマホ開発の実感・個人情報管理要望を追記
- docs/blog-seeds.md に個人情報管理ネタを追記（講座候補）

**他記事への波及（後続セッションで確認）:**
- 他記事でClaude Codeのプラン表記が「Pro」になっている箇所がないか確認

### 未着手: セッション4〜12

| セッション | 対象 | slug |
|-----------|------|------|
| 4 | 記事No.3 | setup-claude-code-getting-started |
| 5 | 記事No.4 | story-free-blog-one-month |
| 6 | 記事No.5 | claude-claude-md-guide |
| 7 | 記事No.6 | ops-annual-cost-13-dollars |
| 8 | 記事No.7 | story-cursor-to-claude-code |
| 9 | 記事No.8 | build-tailwind-with-claude-code |
| 10 | 記事No.9 | claude-prompt-tips-from-failures |
| 11 | 記事No.10 | story-claude-code-10-mistakes |
| 12 | 用語集 | setup-ai-dev-glossary |

### 各セッションの進め方
1. **事前確認**: docs/fact-check-log.md で既に確認済みの事実を確認し、同じ質問を繰り返さない
2. 記事を全文読み、セクションごとにユーザーに事実確認
3. ユーザーの回答を docs/user-voice.md に記録
4. AIの事実誤認があれば docs/ai-failures.md に記録
5. 確認済み事実を docs/fact-check-log.md に追記
6. 修正反映 → 他記事との整合性チェック

### 全記事完了後
1. 全記事横断の整合性チェック
2. STRATEGY.md更新（3エージェントの提言反映）
3. 戦略実行（X開設、KW最適化等）

### 注意点
- 1記事1セッションが基本（精度担保のため）
- トークン余力がある場合のみ次の記事に進む（AIから提案する）
- Lighthouseスコアの捏造は複数記事に波及しているので、各セッションで該当記事を修正する
