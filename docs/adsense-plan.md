# ブログ強化計画

## 🛠 ブログ強化

### Phase 1: 純ReactからNext.jsへ移行

- [x] ホームを`Parts.tsx`共通コンポーネントで再構築
  - 自己紹介文はまだ匿名ハンドル「ももか」表記 → Phase 3で差し替え
- [x] 各記事（26本）を`src/app/<記事名>/page.tsx`にルーティング化（1記事1フォルダ方式）
- [x] 記事一覧ページ（`src/app/list/`）のルーティング化
- [x] 未移行ページの移行（`IndexEn`, `ListTech`, `PlivacyPolicy`）
- [x] 画像アセットを`public/assets/`に移行
  - [x] `page.tsx`内の相対パス画像4箇所を`/assets/...`表記に統一
- [x] `LastUpdate`の`document.lastModified`依存を解消（ビルドエラーの原因だった）
- [x] `<a href>`を`next/link`の`<Link>`に統一
- [x] ローカルビルドで各記事のHTML出力を確認

### Phase 2: SEO・URL整備

- [x] URLをケバブケースに統一する方針を決定（実施・`.htaccess`リダイレクトは未着手）
  - [ ] 各記事のURLをケバブケース化
  - [ ] `blog-react/todo/.htaccess`に新URLへの301リダイレクトを追加
- [ ] Google Analyticsの初期化（`ReactGA.initialize()`）を`blog-react`から移植する
- [ ] wwwドメインを非wwwへ301リダイレクト
- [ ] 全記事に`meta description`を設定
- [ ] `react-helmet-async`のタイトル設定を`export const metadata`に置き換え

### Phase 3: ブログの実名化

- [x] 実名公開範囲を決定 → ブログ名「羽鳥未久の世界一かわいいテックブログ」に本名フルネームを含める形で確定
- [ ] Aboutページに実名と経歴を追記（住所・勤務先詳細など個人特定に繋がる情報は載せない）
- [ ] サイト全体の著者表記を統一
- [ ] 記事に著者情報の構造化データ（`schema.org`の`Person`/`Article`）を埋め込む
- [x] SNSアカウントの紐付けは対象外に決定（実名運用SNSはLinkedInのみ）
- [ ] プライバシーポリシーを実名運用に合わせて更新
- [ ] 独自ドメインを`hatorimiku.com`に変更する（詳細・実施はPhase 5参照）

### Phase 4: 公開 → Search Console → AdSense申請

- [ ] ホスティング方針を決めてデプロイする
  - 案: まずロリポップに新サイトをデプロイしてAdSense申請を先行、AWS移行は申請と切り離してPhase 5で後日実施
- [ ] お問い合わせフォームを設置する（Googleフォーム等を想定）
- [ ] HTTPS統一、`robots.txt`（`Disallow: /`になっていないこと）を確認する
- [ ] `sitemap.xml`を生成しSearch Consoleに送信する
- [ ] 主要記事のインデックス登録をリクエストする
- [ ] インデックス反映を待つ（目安2週間程度）
- [ ] AdSense申請

### Phase 5: AWSへのサーバー移行（AdSense申請と切り離して実施）

- 現状: ロリポップで稼働中（自動更新・12ヶ月契約、解除期限2026/11/21）。詳細は進捗ログ2026-08-19参照
- [x] ロリポップの契約状況を確認する
- [ ] `hatorimiku.com`をAWS Route 53で新規登録し、旧`kawaii-tech-momoka.com`から301リダイレクトを設定する（恒久維持）
- [x] AWS構成を決定する（S3 + CloudFront）
- [ ] AWSへデプロイし動作確認する
- [ ] DNSを切り替える
- [ ] 数日間の並行稼働を確認する
- [ ] ロリポップを解約する（2026/11/21まで）

## ✍️ 新規記事作成

### OS自作関連の英語記事
- [ ] 輪読会での学びをまとめたマークダウンから精査して一つのMDファイルにする
- [ ] いくつかの記事に分割（すべてを乗せようとする必要はない
- [ ] 記事の内容について学びつつ１つずつ記事を作成×記事数分

## 📝 進捗ログ

### 2026-08-19
- 旧`docs/adsense-tasks-v2.md`（統合済みで現存せず）にあったAWS移行の内容が本計画書に反映されていなかったことが判明 → 「Phase 5: AWSへのサーバー移行」として復元・追記（ロリポップの契約状況、S3+CloudFront構成、DNS切り替え、解約タイミングを含む）
- ロリポップ管理画面で契約詳細を確認: 次回決済日2026/11/22・解除期限2026/11/21、独自ドメイン無料特典はホスティング契約に紐付くことが判明
- 実名ドメイン`hatorimiku.com`への変更を決定（旧ドメインからの301リダイレクトは必須、リダイレクトは恒久維持の方針。登録サービスは未定）
- 並行して別セッションが同じ作業ディレクトリで`git reset`を実行し、本ファイルへの編集が一度消失 → 会話内容から復元
- 新ドメイン`hatorimiku.com`の登録先をAWS Route 53に決定。Phase 3とPhase 5に重複していたドメイン関連の記述をPhase 5に一本化

### 2026-08-17
- `IndexEn`・`ListTech`・`PlivacyPolicy`を旧`blog-react`から移植し`page.tsx`化
- create-next-appのデフォルトテンプレートのままだった`page.tsx`を実際のホーム内容に置き換え
- 記事一覧ページ4本（`src/app/list/`）をルーティング化
- `page.tsx`の画像パスを`/assets/...`に統一
- `blog-react`の実態を調査。デプロイ手順（レンタルサーバー）を確認し`.htaccess`参照先を`todo/.htaccess`に訂正、`todo/2026.md`から未反映タスク（wwwリダイレクト・お問い合わせフォーム）を追加、Google Analyticsが`initialize()`未呼び出しで実質計測できていないことを確認

### 2026-08-16
- 記事26本を`page.tsx`としてルーティング化
- `LastUpdate`のdocument依存を解消し、ビルドが通るように修正
- 重複下書き`FirstHobbyOS.tsx`を削除
- Phase構成を見直し（SEO・URL整備を独立、新規記事作成を別グループに分離）

### 2026-08-14
- URLケバブケース化の方針を決定（`.htaccess`リダイレクトが別途必要と判明）
- 重複ファイル`FirstCodeReview`を整理
- 内部リンクを`next/link`の`<Link>`に統一
- SNSの実名アカウント紐付けは対象外に決定
- 画像アセット31点を`public/`にコピー

### 2026-08-13
- ホームを`Parts.tsx`共通コンポーネントで再構築
- 記事28本・一覧4本をコピー（`page.tsx`未接続でルーティングは未着手）
- `next build`が`document is not defined`で失敗することを確認
- ブログ名を「羽鳥未久の世界一かわいいテックブログ」に決定
