# Portfolio Site

個人開発のポートフォリオ兼、3D技術とWebアプリケーション開発の実験的プロダクトです。

## 概要 (Overview)

Webと3Dの境界をなくすインタラクティブな表現と、堅牢なWebアプリケーション構築の共存を目指して開発しました。ユーザーが直感的に体験できる空間設計と、エンジニアとしての基礎力を示すことを目的としています。

## 使用技術 (Tech Stack)

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **3D / Graphics:** Three.js, React Three Fiber (R3F), Blender
- **Deployment:** Vercel

## 工夫した点・技術的挑戦 (Technical Highlights)

### 1. 3DとUIの融合 (High Performance 3D)

- **パフォーマンス最適化:** モデルのGLB化とテクスチャのWebP圧縮、およびdracoデコーダーの導入により、モバイル環境でも軽量なローディングを実現しました。
- **マテリアル設計:** Substance PainterでベイクしたEmissiveテクスチャを活用し、軽量なマテリアル設定でリッチな表現を実装しました。

### 2. インタラクティブな体験設計

- **React Three Fiberの活用:** 3DオブジェクトとDOM要素のシームレスな統合を行い、スクロールに応じたカメラワークやアニメーションを実装しました。

### 3. 実装

- **設計:** 大学のプロジェクトで培ったDB設計（正規化・スキーマ設計）やネットワークの基礎知識を意識し、保守性の高いコードベースを維持しています。

## ディレクトリ構成 (Directory Structure)

- `app/` : ページルーティングとUIロジック
- `components/` : Three.jsモデルコンポーネントと再利用可能なUIパーツ
- `public/` : 3Dモデルデータおよび圧縮済みテクスチャ

## License

MIT
