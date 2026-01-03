"use client";

import { useEffect, useState } from "react";
import DotMatrix from "@/components/DotMatrix";

// パーティクルの型定義
type Particle = {
  id: number;
  size: number;
  top: number;
  delay: number;
  duration: number;
  blur: number; // ぼかし量
  opacity: number; // 透明度
};

export default function Top() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        const size = Math.random() * 4 + 2; // 2px〜6px
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;

        const blur = (6 - size) * 0.5;
        const opacity = (size / 6) * 0.7 + 0.3;

        newParticles.push({
          id: i,
          size,
          top,
          delay,
          duration,
          blur,
          opacity,
        });
      }
      setParticles(newParticles);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden bg-blue-300"
    >
      {/* 生成した配列を展開して表示 */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full bg-white"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            right: `-10px`,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`,
            animation: `floatLeft ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="moving-grid absolute -top-1/2 -left-1/2 h-[300%] w-[300%] overflow-hidden"></div>

      <DotMatrix
        cols={3}
        rows={3}
        size="w-1 h-1"
        gap="gap-3"
        color="bg-gray-200"
        className="absolute top-1/2 right-2/3 blur-[0.5px]"
      />
    </section>
  );
}
