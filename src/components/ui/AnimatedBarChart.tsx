"use client";

import { motion } from "framer-motion";

// データの型定義（ラベル、値(0-100%)、オプションの色）
export type BarData = {
  label: string;
  value: number; // ここでは仮に 0〜100 のパーセント値とします
  color?: string; // 個別に色を変えたい場合用 (Tailwindのクラス名: "bg-blue-500"など)
};

interface AnimatedBarChartProps {
  data: BarData[];
  barHeight?: string; // 棒の太さ (Tailwindクラス: h-4, h-6 など)
}

export default function AnimatedBarChart({
  data,
  barHeight = "h-4", // デフォルトは h-4
}: AnimatedBarChartProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      {data.map((item, index) => (
        // 1つの棒グラフの行
        <div key={item.label} className="flex items-center gap-4">
          {/* 1. ラベル部分 (幅を固定して揃える) */}
          <div className="w-20 text-right text-sm font-bold text-gray-600 dark:text-gray-300">
            {item.label}
          </div>

          {/* 2. 棒グラフの軌道 (背景のグレーの線) */}
          <div
            className={`relative flex-1 rounded-full bg-gray-200 dark:bg-gray-700 ${barHeight} overflow-hidden`}
          >
            {/* ★アニメーションする棒本体
               - initial: 幅0%からスタート
               - animate: データの value% まで伸びる
               - transition: 伸びる動きの設定
            */}
            <motion.div
              className={`absolute top-0 left-0 h-full rounded-full ${item.color || "bg-blue-500"}`}
              initial={{ width: "0%" }}
              // viewportに入った瞬間にアニメーション開始 (スクロールしたら伸びる)
              whileInView={{ width: `${item.value}%` }}
              // 一度だけ実行
              viewport={{ once: true }}
              transition={{
                duration: 1, // 1秒かけて伸びる
                ease: "easeOut", // 最後ゆっくりに
                delay: index * 0.1, // 順番に少しずつ遅らせてスタート（スタッガー効果）
              }}
            />
          </div>

          {/* 3. 値のラベル (右側の数字) */}
          <div className="w-12 text-sm font-medium text-gray-500 dark:text-gray-400">
            {item.value}%
          </div>
        </div>
      ))}
    </div>
  );
}
