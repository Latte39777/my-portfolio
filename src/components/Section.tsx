"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  align?: "left" | "right" | "center";
  // 具体的な型に変更
  position?: [number, number, number]; // x, y, z の配列
  rotation?: [number, number, number]; // x, y, z の配列
  scale?: number | [number, number, number]; // 数値 または 配列
  start?: number; // 数値
  end?: number; // 数値
};

export default function Section({ children, align = "center" }: Props) {
  // 配置の調整 (左寄せ、右寄せ、中央)
  const justifyClass =
    align === "left"
      ? "md:justify-start"
      : align === "right"
        ? "md:justify-end"
        : "md:justify-center";

  return (
    <section
      className={`flex h-screen w-screen flex-col items-center justify-center p-8 md:p-20 ${justifyClass} `}
    >
      {/* ふわっと出すアニメーションだけ残す */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[500px]"
      >
        {children}
      </motion.div>
    </section>
  );
}
