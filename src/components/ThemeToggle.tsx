"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // マウント後に一度だけ実行。
  // React 18 の警告を避けるため、非常にシンプルな代入に留めます。
  useEffect(() => {
    setMounted(true);
  }, []);

  // ★重要：マウントされるまでは「物理的に何も描画しない」
  // これにより、サーバーとクライアントのズレ（Hydration Error）が起きなくなります。
  if (!mounted) return <div className="h-6 w-[72px]" />;

  const isDark = theme === "dark";

  return (
    <button
      // buttonタグにすることで、アクセシビリティも向上します
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex cursor-pointer items-center gap-3 border-none bg-transparent outline-none select-none"
      aria-label="Toggle Theme"
    >
      {/* 太陽アイコン */}
      <Icons.sun
        size={18}
        className={`transition-colors duration-300 ${
          !isDark ? "text-orange-200" : "text-orange-200/30"
        }`}
      />

      {/* トグル本体 */}
      <div
        className={`flex h-6 w-12 items-center rounded-full px-1 shadow-inner transition-colors duration-300 ${
          isDark ? "bg-orange-500/50" : "bg-white/10"
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="h-4 w-4 rounded-full bg-white shadow-lg"
          animate={{ x: isDark ? 24 : 0 }}
        />
      </div>

      {/* 月アイコン */}
      <Icons.moon
        size={16}
        className={`transition-colors duration-300 ${
          isDark ? "text-orange-200" : "text-orange-200/30"
        }`}
      />
    </button>
  );
}
