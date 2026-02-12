export const TYPO = {
  // 1. HEROロゴ (h1): 圧倒的主役感。少し字間を詰めて密度を上げる
  h1: "text-5xl md:text-8xl font-black tracking-tighter text-white antialiased drop-shadow-2xl",

  // 2. セクションタイトル (h2): WORKSなどの見出し。広めの字間で高級感を出す
  // Worksコードの「text-4xl font-black tracking-widest text-orange-100」をベースに
  h2: "text-3xl md:text-4xl font-black tracking-[0.25em] uppercase text-orange-100 drop-shadow-sm",

  // 3. カードタイトル (h3): プロジェクト名。太さと視認性重視
  h3: "text-lg md:text-xl font-black text-white transition-colors group-hover:text-orange-200",

  // 4. 説明文・本文 (p): 読みやすさと色の柔らかさ
  // Worksコードの「text-sm font-bold text-orange-200/80」をベースに
  p: "text-sm md:text-base font-bold leading-relaxed text-orange-200/80 antialiased",

  // 5. ラベル・小文字 (label): No Imageやカテゴリー、日付など
  label: "text-[10px] font-bold uppercase tracking-[0.3em] text-orange-200/50",

  // 6. アクセント (accent): モニター光とリンクする水色
  // 4色のうちの「水色」を「発光」として定義
  cyan: "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] font-black",
};
