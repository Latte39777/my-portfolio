"use client";

import { Html, useProgress } from "@react-three/drei";
import Scene from "@/components/Scene";
import Header from "@/components/layout/Header";
import FrameBorder from "@/components/layout/FrameBorder";
import { useTheme } from "next-themes";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          color: "#333",
          fontFamily: "sans-serif",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        {/* ロード進捗を表示 */}
        {Math.round(progress)} % loaded...
      </div>
    </Html>
  );
}

export default function Page() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#f0f0f0" }}>
      <FrameBorder isDark={isDark} />
      <Header />
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
    </div>
  );
}
