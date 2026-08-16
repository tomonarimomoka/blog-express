# ブログ強化計画（Next.js移行 / 実名化 / OS自作英語記事）

## 🛠 ブログ強化

### Phase 1: 純ReactからNext.jsへ移行

- [x] ホームを`Parts.tsx`共通コンポーネントで再構築
  - 自己紹介文はまだ匿名ハンドル「ももか」表記 → Phase 3で差し替え
- [x] 各記事（26本）を`src/app/<記事名>/page.tsx`にルーティング化（1記事1フォルダ方式）
- [ ] 記事一覧ページ（`src/app/list/`）のルーティング化
- [ ] 未移行ページの移行（`IndexEn`, `ListTech`, `PlivacyPolicy`）
- [x] 画像アセットを`public/assets/`に移行
  - [ ] `page.tsx`内の相対パス画像4箇所を`/assets/...`表記に統一
- [ ] `react-helmet-async`のタイトル設定を`export const metadata`に置き換え（Server Component化のため）
- [x] `LastUpdate`の`document.lastModified`依存を解消（ビルドエラーの原因だった）
- [x] `<a href>`を`next/link`の`<Link>`に統一
- [x] ローカルビルドで各記事のHTML出力を確認

### Phase 2: SEO・URL整備

- [x] URLをケバブケースに統一する方針を決定（実施・`.htaccess`リダイレクトは未着手）
  - [ ] 各記事のURLをケバブケース化
  - [ ] `blog-react/dist/.htaccess`に新URLへの301リダイレクトを追加
- [ ] 全記事に`meta description`を設定
- [ ] Google Analyticsの初期化を`next/script`経由に移植

### Phase 3: ブログの実名化

- [x] 実名公開範囲を決定 → ブログ名「羽鳥未久の世界一かわいいテックブログ」に本名フルネームを含める形で確定
- [ ] Aboutページに実名と経歴を追記（住所・勤務先詳細など個人特定に繋がる情報は載せない）
- [ ] サイト全体の著者表記を統一
- [ ] 記事に著者情報の構造化データ（`schema.org`の`Person`/`Article`）を埋め込む
- [x] SNSアカウントの紐付けは対象外に決定（実名運用SNSはLinkedInのみ）
- [ ] プライバシーポリシーを実名運用に合わせて更新

### Phase 4: 公開 → Search Console → AdSense申請

- [ ] ホスティング方針を決めてデプロイする
- [ ] HTTPS統一、`robots.txt`（`Disallow: /`になっていないこと）を確認する
- [ ] `sitemap.xml`を生成しSearch Consoleに送信する
- [ ] 主要記事のインデックス登録をリクエストする
- [ ] インデックス反映を待つ（目安2週間程度）
- [ ] AdSense申請

## ✍️ 新規記事作成

### OS自作関連の英語記事
- [ ] 輪読会での学びをまとめたマークダウンから精査して一つのMDファイルにする
- [ ] いくつかの記事に分割（すべてを乗せようとする必要はない
- [ ] 記事の内容について学びつつ１つずつ記事を作成×記事数分

## 📝 進捗ログ

### 2026-08-13
- ホームを`Parts.tsx`共通コンポーネントで再構築
- 記事28本・一覧4本をコピー（`page.tsx`未接続でルーティングは未着手）
- `next build`が`document is not defined`で失敗することを確認
- ブログ名を「羽鳥未久の世界一かわいいテックブログ」に決定

### 2026-08-14
- URLケバブケース化の方針を決定（`.htaccess`リダイレクトが別途必要と判明）
- 重複ファイル`FirstCodeReview`を整理
- 内部リンクを`next/link`の`<Link>`に統一
- SNSの実名アカウント紐付けは対象外に決定
- 画像アセット31点を`public/`にコピー

### 2026-08-16
- 記事26本を`page.tsx`としてルーティング化
- `LastUpdate`のdocument依存を解消し、ビルドが通るように修正
- 重複下書き`FirstHobbyOS.tsx`を削除
- Phase構成を見直し（SEO・URL整備を独立、新規記事作成を別グループに分離）
