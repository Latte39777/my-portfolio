"use client";

import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { useTheme } from "next-themes";

import { Model } from "./Fini"; // ← ファイル名に合わせて適宜変更してください
import CameraHandler from "@/components/CameraHandler";
import Top from "@/components/sections/Top";
import Works from "@/components/sections/Works";
import Vision from "@/components/sections/Vision";
import Skills from "@/components/sections/Skills";
import Profile from "@/components/sections/Profile";
import Contact from "@/components/sections/Contact";

function ColorShift() {
  const scroll = useScroll();
  const colorBlue = new THREE.Color("#5b9cff");
  const colorPink = new THREE.Color("#ffd1dc");

  useFrame((state) => {
    const offset = scroll.offset;
    const t = THREE.MathUtils.smoothstep(offset, 0.45, 0.7);
    state.scene.background = colorBlue.clone().lerp(colorPink, t);
  });
  return null;
}

export default function Scene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 45 }}
      dpr={[1, 2]} // 高画質化！
      gl={{
        localClippingEnabled: true,
        antialias: true, // ジャギー（ギザギザ）防止！
        powerPreference: "high-performance",
      }}
    >
      {/* StandardMaterial（光るパーツ）の色を正確に出すための、無影の全体照明。
        これ以外の Environment や pointLight は重いので全削除！
      */}
      <ambientLight intensity={1} color="#ffffff" />

      <Suspense fallback={null}>
        <ScrollControls pages={10.5} damping={0.1}>
          <Model isDark={isDark} />
          <CameraHandler />
          <ColorShift />
          <Scroll
            html
            style={{ width: "100%", color: isDark ? "#f7fafc" : "#1a202c" }}
          >
            <Top />
            <Profile />
            <Works />
            <Vision />
            <Skills />
            <Contact />
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
