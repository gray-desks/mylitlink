# MyLitLink - 金沢モダンスタイル

シンプルな個人用リンク集ランディングページ（Link-in-bio）です。伝統的な金沢の美学とモダンなデザインを融合させた「Fresh Kanazawa」テーマを採用しています。

## 特徴

- 🏯 金沢モダン: 伝統と現代の融合デザイン
- 🔶 金箔アクセント: 金沢の金箔工芸からインスピレーション
- 📱 モバイルファースト: スマートフォンからデスクトップまで美しく表示
- ⚡ 超軽量: JavaScript最小限、CSS < 10KB
- 🔍 SEO & アクセシビリティに配慮

## MVPファイル構成

```
mylitlink/
├── index.html          # メインページ
├── style.v2.css        # スタイル（Fresh Kanazawaテーマ）
├── motion.js           # アニメーション効果
├── my.png              # アバター画像
├── 秀歌.png            # 音楽アーティストリンク用画像
├── note.png            # Note執筆リンク用画像
└── README.md           # このファイル
```

## 使い方

### ローカル開発

```bash
# リポジトリをクローン
git clone <your-repo-url>
cd mylitlink

# 開発サーバー起動
python3 -m http.server 3000

# ブラウザで開く
open http://localhost:3000
```

### カスタマイズ

#### プロフィール情報の変更

`index.html`の以下の部分を編集：

```html
<h1 class="name">Hide@Kanazawa</h1>
<p class="bio">特例子会社で働くアラフォー社員。<br>
  マイノリティでも学び続ければ自分らしく生きることができる。そんな想いを胸に日々活動しています。</p>
```

#### リンクの追加・編集

現在のリンク：
- 音楽アーティスト「秀歌 -Shūka」公式サイト
- Note執筆

新しいリンクを追加するには：

```html
<a href="YOUR_URL" class="link-card animate" target="_blank" rel="noopener">
  <img src="YOUR_IMAGE.png" alt="説明" style="width: 54px; height: 54px; object-fit: cover; border-radius: 8px; margin-right: 18px; flex-shrink: 0;">
  <span class="title">リンクタイトル</span>
</a>
```

#### アバター画像の変更

1. 画像を `my.png` として保存（推奨: 700×700px正方形）
2. HTMLは自動で反映されます

### GitHub Pagesでの公開

1. GitHubリポジトリ作成・プッシュ
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` / Folder: `/ (root)`
5. Save

## Fresh Kanazawaデザイン

金沢の伝統と現代性を融合した明るく爽やかなテーマ：

- **淡いアイボリー基調**: 加賀友禅の白地をイメージ
- **シャンパンゴールド**: 金沢金箔を現代的にアレンジ
- **浅葱色・若草色**: 兼六園の自然と水を表現
- **繊細な格子パターン**: 和紙の質感を現代的に再現

## パフォーマンス

- ファイルサイズ: HTML 3KB / CSS 9KB / JS 1KB
- 画像最適化: PNG圧縮済み
- モバイルファースト: レスポンシブデザイン

## ライセンス

MIT License