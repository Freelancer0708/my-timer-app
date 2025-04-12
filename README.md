# Focus Timer

シンプルでコンパクト、仕事や勉強に集中するための **Electron製タイマーアプリ** です。  
高さ164px以内に収まり、黒背景＋白文字で目に優しい設計になっています。

---

## 🕒 主な機能

- スタート・ストップ・リセット
- 10分ごとに時間追加（+10min ボタン）
- 黒背景・白文字の落ち着いたデザイン
- 高さ制限（164px以内）でも収まるUI
- ウィンドウ移動＆リサイズ可能
- `.exe` ビルド対応＆カスタムアイコン付き

---

## 📦 開発環境のセットアップ

まず最初に必要なパッケージをインストールします：

```bash
npm install --save-dev electron electron-builder
```

---

## 📦 開発環境での起動方法

```bash
npm install
npm start
```

## 🛠 Windows用 .exe ビルド方法
⚠ 必ず「管理者として実行」したターミナルで実行してください！

```bash
npm run build
```

ビルド後、/dist/ フォルダに .exe やインストーラーが生成されます。
インストーラー不要で使いたい場合は dist/win-unpacked/Focus Timer.exe を直接起動すればOK！

