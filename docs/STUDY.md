## 2026年4月29日
src/app配下のフォルダでルーティングを表現するのか。
page.tsxという名前にするのは決まり？何かルールがあるの？
## 2026年8月16日
### 設計思想
* 純React：ビルドすると巨大なJavaScriptとほぼ空のHTMLにする
* Next.js：ビルドするとHTML＋JavaScriptにする
### ファイルとURLの紐づけ
* 純React：当然JavaScript
* Next.js：フォルダ構造や特定ファイル名からフレームワークが解決する。