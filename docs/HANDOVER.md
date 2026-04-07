# 引継書

> 更新日: 2026-04-07

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
- Claude Proの料金「$20」表記の修正（セッション4で発覚。$17が正しい。$20はCursor Pro）
  - 対象: ops-annual-cost-13-dollars.mdx (セッション7), story-cursor-to-claude-code.mdx (セッション8), story-zero-code-blog.mdx (セッション2で対応漏れ)

### 完了済み: セッション4 — 記事No.3 事実確認

**修正7箇所:**
1. 所要時間「約30分」→「約1時間」（description・見出し・本文・merit-card・まとめの5箇所）
2. 「キーボードで叩くのは日本語の言葉だけ」→ 音声入力の事実と整合（入力手段を限定しない表現に）
3. 料金プラン表・本文「Pro $20/月」→「Pro $17/月」（Claude Pro=$17、Cursor Pro=$20の混同修正）
4. 「APIの従量課金で$100以上」→「追加クレジットを自分で購入してトータル約$100」（API課金はCursor時代の別件）
5. 「僕がハマったポイント」セクション全面書き直し→「エラーが出ても怖くない理由」（AIの体験捏造→実体験ベースに）
6. デスクトップアプリの遷移を正確に: Claudeチャットアプリ→Claude Codeデスクトップ→ターミナル（理由: Agent Teams・Auto Mode）
7. 「初めてサイトが映った感動」→ サウナブログ構築時の体験であることを明示

**追加作業:**
- docs/fact-check-log.md にセッション4の確認事実を追記
- docs/ai-failures.md に2件追記（体験捏造パターン、Claude Pro $17→$20混同）
- docs/blog-seeds.md に音声入力環境ネタを追記（講座候補）
- docs/user-voice.md にユーザーの声を追記

**他記事への波及（後続セッションで確認）:**
- Claude Proの料金が「$20」になっている記事: ops-annual-cost-13-dollars.mdx, story-cursor-to-claude-code.mdx, story-zero-code-blog.mdx

### 完了済み: セッション5 — 記事No.4 事実確認

**修正8箇所:**
1. 「iPhoneから」→「スマホ（Galaxy Z Fold7）から」
2. 「通勤電車の中でも」→「会社の駐車場や昼休みの散歩中にも」（車通勤）
3. WordPress公開フロー: 7ステップ→10ステップに拡充（XMind→Word→PowerPoint→WordPress…の実態）
4. 画像管理セクション: 手動前提→Claude Code自動化の実態に書き直し（撮影指示→ファイル名→WebP→透かし→差込み）
5. 「メンテナンス3割」「依存パッケージ5分」→ 実態に書き直し（ユーザーは認識すらしていない。真のボトルネックは構成思考・執筆・図解）
6. 「朝5時に起きて」→「朝5時過ぎに起きて」
7. GA4データを最新値に更新（PV9→PV65、5日間分）。GSCも3クリック/20表示に更新
8. merit-card/まとめを最新データに更新（6記事→11記事、24デプロイ→73デプロイ）

**追加作業:**
- docs/fact-check-log.md にセッション5の確認事実＋GA4/GSC実測データを追記
- docs/ai-failures.md に「iPhone」「通勤電車」「メンテナンス3割」等の事実誤認を記録
- docs/user-voice.md にWordPressフロー・画像自動化・ボトルネック変化の声を記録

**特記事項:**
- この記事はデータを定期更新する方針（ユーザー指示）。1ヶ月経過時点で再度データ更新が必要
- GA4プロパティIDは `properties/531064800`（「AIと暮らす。」）

### 完了済み: セッション6 — 記事No.5 事実確認

**修正6箇所:**
1. merit-cards: サウナブログ「ルールファイル16個」→「ルール・スキル20個」
2. compare-cards: AIブログのルールファイル「0個」→「1個」（context-management.md追加反映）
3. Cursor Rulesの経緯: Google Discoverの記事→YouTube検索→Cursor Rulesを知った（経緯追加）
4. Tech Stackエピソード: 「うちはpnpmを使っているから」→Geminiが提案した技術スタックをClaude Codeに渡した
5. Development Workflowエピソード: 「勝手にgit操作しないで」→**実態は逆**。最初はAIから提案がなく、ユーザーから依頼していた
6. パターンB全面書き直し: Agent TeamsでCLAUDE.md改善 → 実態はGoogle DiscoverのQiita記事URLをClaude Codeに直接渡して改善

**追加作業:**
- docs/fact-check-log.md にセッション6の確認事実を追記
- docs/ai-failures.md にエピソード3件捏造パターンを記録
- docs/user-voice.md にルール改善サイクル・Gitとの付き合い方の声を追記

### 完了済み: セッション7 — 記事No.6 事実確認

**修正7箇所:**
1. Lighthouse merit-cards: P100/A100/SEO100 → SEO100/BP100/P62（**捏造の再犯**）
2. Lighthouse説明文: 「何もしなくても100点」→「SEOとBest Practicesは満点。Performanceは62点で改善余地あり」
3. Claude Pro料金: $20 → $17（**再犯**）
4. WordPress管理: 「半日つぶれる」「メンテ>記事」→ 記事構成・執筆・図解が大半（セッション5の確認事実を反映）
5. Cloudflare決算資料: 「自分で読んで判断」→**完全な捏造**。実態はAIに「無料で大丈夫か」聞いただけ
6. ターミナル学習: 「基本操作に1-2日戸惑った」→**捏造**。エイリアス設定後はChatGPTと同じ
7. まとめ: 「Lighthouseスコアは全項目100点」→「SEO・Best Practicesは満点」

**追加作業:**
- CLAUDE.md「既存ドキュメントの事前確認」ルール強化: fact-check-log最優先確認を明記
- メモリに「質問前にdocs全件読み込み必須」を記録
- docs 3ファイル更新

**ユーザーからのフィードバック（重要）:**
- セッション7開始時にWordPress管理の手間について再質問してしまった（セッション5で既に確認済み）
- 「なぜfact-check-logの確認が漏れたのか」と指摘
- → CLAUDE.md・メモリ両方にルール強化を反映済み

### 未着手: セッション8〜12

| セッション | 対象 | slug |
|-----------|------|------|
| 8 | 記事No.7 | story-cursor-to-claude-code |
| 9 | 記事No.8 | build-tailwind-with-claude-code |
| 10 | 記事No.9 | claude-prompt-tips-from-failures |
| 11 | 記事No.10 | story-claude-code-10-mistakes |
| 12 | 用語集 | setup-ai-dev-glossary |

### 次セッション（セッション8）の必須事前確認事項
- **fact-check-logを全セッション分読む**（特に他記事への波及事項）
- 記事No.7はCursor → Claude Code移行記事。以下の波及修正が必要:
  - Claude Pro料金 $20 → $17（既知）
  - その他、Cursor時代の事実は fact-check-log セッション2 を参照
  - 「最高精度モデル」表記（Sonnet → Opus）の確認

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
