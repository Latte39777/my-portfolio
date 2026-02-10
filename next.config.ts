import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ★HTML書き出しモード
  output: 'export',

  // ★リンク切れ防止（フォルダ分けされる）
  trailingSlash: true,

  // ★重要：CSSやJSを「現在の場所」から読み込む（./）設定
  // これがないと、ダブルクリックで開いた時に真っ白になります
  assetPrefix: './',

  // ★重要：画像最適化を無効化
  // これがないと、npm run build でエラーになります
  images: {
    unoptimized: true,
  },
};

export default nextConfig;