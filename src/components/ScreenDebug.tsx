"use client";

import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function ScreenDebug() {
  const { width } = useThree((state) => state.size);
  const isMobile = width < 768;

  return (
    <Html fullscreen style={{ pointerEvents: "none", zIndex: 9999 }}>
      <div className="fixed top-4 left-4 rounded-lg border border-white/20 bg-black/80 p-4 font-mono text-sm text-white">
        <p className="mb-1">
          現在の幅:{" "}
          <span className="text-xl font-bold text-yellow-400">
            {Math.round(width)}px
          </span>
        </p>
        <div className="flex items-center gap-2">
          判定:
          {isMobile ? (
            <span className="rounded bg-red-500 px-2 py-1 font-bold text-white">
              📱 スマホモード
            </span>
          ) : (
            <span className="rounded bg-blue-500 px-2 py-1 font-bold text-white">
              💻 PCモード
            </span>
          )}
        </div>
        <p className="mt-2 text-xs text-gray-400">閾値: 768px (iPad縦サイズ)</p>

        {/* 768pxの境界線を表示（画面上に赤い線を引く） */}
        <div
          style={{
            position: "fixed",
            left: "768px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "red",
            opacity: 0.5,
          }}
        >
          <span className="absolute top-0 left-1 text-xs text-red-500">
            768pxライン
          </span>
        </div>
      </div>
    </Html>
  );
}
