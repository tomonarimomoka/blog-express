# ブログ強化計画（Next.js移行 / 実名化 / OS自作英語記事）

> 目的: Google AdSense合格
> 3本柱: ① Next.js移行の完了　② ブログの実名化　③ OS自作関連の英語記事の追加

---

## 📌 現状整理

| 項目 | 状態 |
|------|------|
| Next.js移行 | 作業中（`blog-next`）。ホーム(`/`)以外のルートが未接続 |
| 記事コンテンツ | 旧`blog-react`から約30本を`src/app`配下にコピー済みだが、`page.tsx`化されておらずアクセス不可 |
| 実名化 | 未着手 |
| OS自作の英語記事 | 未着手（`hobby-operating-system`で自作OS学習は進行中、素材あり） |
| AdSense申請 | 未着手 |

---

## Phase 1: Next.js移行の完了（最優先）

現状調査で判明している未完了タスク:

- [ ] 各記事を `src/app/<記事名>/page.tsx` の形にルーティング化する（現状は`page.tsx`が無くURLからアクセス不可）
  - 1記事1フォルダにするか、`src/app/artical/[slug]/page.tsx` の動的ルートにまとめるか方針を決める
- [ ] URLをケバブケースに統一するか検討する（`/AwsForBeginner` → `/aws-for-beginner`）
- [ ] 未移行ページの移行: `IndexEn`（英語トップ）, `ListTech`, `PlivacyPolicy`
- [ ] 画像アセットを `public/assets/` にコピーする（現状1枚も移行されておらず記事内`<img>`が壊れている）
- [ ] `react-helmet-async`によるタイトル設定をNext.jsの`export const metadata`に置き換える（App Routerと相性が悪いため）
- [ ] 全記事に`meta description`を設定する（AdSense審査でも評価されるSEO基本対応）
- [ ] Google Analytics（`react-ga4`）の初期化をNext.js向けに移植する（`next/script`や専用クライアントコンポーネント経由）
- [ ] Google AdSenseの審査用/運用用スクリプトタグを`next/script`で設置する
- [ ] `LastUpdate`コンポーネントの`document.lastModified`依存を解消する（SSR/ハイドレーション不整合の懸念、記事データからprops経由で日付を渡す方式に変更）
- [ ] `<a href>` を `next/link`の`<Link>`に統一する
- [ ] 重複ファイル `FirstCodeReview .tsx`（末尾スペース） と `FirstCodeReview.tsx` を整理し、不要な方を削除する
- [ ] ローカルビルドで各記事のHTMLに中身が入っているか確認する（View Source / SSR確認）

---

## Phase 2: ブログの実名化

**狙い**: AdSense審査はE-E-A-T（経験・専門性・権威性・信頼性）を重視する。匿名ハンドルのみより、実名・経歴が明示されている方が個人ブログとしての信頼性評価が上がりやすい。

- [ ] 実名を公開するかどうか、公開範囲を確定する（本名フルネームか、名字のみか等）
- [ ] Aboutページ（自己紹介）に実名と経歴を追記する（現状の匿名プロフィール文面を土台にする）
  - 個人の特定に繋がりすぎる情報（住所・勤務先詳細など）は載せない方針を明記
- [ ] サイト全体の著者表記を統一する（ヘッダー/フッター/各記事末尾など、名乗り方をブレさせない）
- [ ] 記事に著者情報の構造化データ（`schema.org` の `Person`/`Article` の `author`）を埋め込む
- [ ] SNS等の実名アカウントとの紐付けが必要か検討する（信頼性向上のため。任意）
- [ ] プライバシーポリシーの内容を実名運用に合わせて更新する

---

## Phase 3: OS自作関連の英語記事

**素材**: `~/source/hobby-operating-system`（`STUDY_LOG.md`に沿って自作OS学習が進行中。day1, kernel, edk2, devenvなど）と、既存の日本語記事（`FirstHobbyOS`, `elementOfComputer`, `HowToBootSurfaceByUSB`）が土台になる。

- [ ] `hobby-operating-system/STUDY_LOG.md` の進捗を棚卸しし、記事化できる単位（章・マイルストーン）に切り出す
- [ ] 英語記事の構成方針を決める（日英別記事にするか、1記事内で言語切り替えにするか）
- [ ] 第1弾記事を作成する（例: なぜ自作OSを始めたか / 開発環境構築(EDK2/QEMU)編）
- [ ] 目標本数を設定する（例: OS系バイリンガル記事 10本以上）
- [ ] 各記事1,500字以上の独自コンテンツであることを確認する（重複・低品質コンテンツ扱いを避ける）
- [ ] 英語記事用のURL/カテゴリ構成を決める（例: `/en/os/...`）
- [ ] 英語記事にもmeta description・著者情報を設定する（Phase 1・2と整合させる）

---

## Phase 4: 公開 → Search Console → AdSense申請

- [ ] ホスティング方針を決めてデプロイする
- [ ] HTTPS統一、`robots.txt`（`Disallow: /`になっていないこと）を確認する
- [ ] `sitemap.xml`を生成しSearch Consoleに送信する
- [ ] 主要記事のインデックス登録をリクエストする
- [ ] インデックス反映を待つ（目安2週間程度）
- [ ] AdSense申請

---

## 🗓 進め方の目安

1. Phase 1（Next.js移行）を完了させる
2. Phase 2（実名化）とPhase 3（OS英語記事）は並行して進める
3. Phase 1〜3が一定量揃ってからPhase 4（公開・申請）に入る
