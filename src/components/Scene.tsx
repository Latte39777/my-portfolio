"use client";

import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  Environment,
  useScroll,
} from "@react-three/drei";

import { Model } from "./Room";
import CameraHandler from "@/components/CameraHandler";
import Top from "@/components/sections/Top";
import Works from "@/components/sections/Works";
import Vision from "@/components/sections/Vision";
import Skills from "@/components/sections/Skills";
import Profile from "@/components/sections/Profile";
import Contact from "@/components/sections/Contact";
import { useTheme } from "next-themes";

function ColorShift() {
  const scroll = useScroll();
  const colorBlue = new THREE.Color("#5b9cff");
  const colorPink = new THREE.Color("#ffd1dc");

  useFrame((state) => {
    const offset = scroll.offset;
    // 0.45(Works後) から 0.7(Vision開始) にかけて色を変える
    const t = THREE.MathUtils.smoothstep(offset, 0.45, 0.7);

    // 背景色を滑らかに変更
    state.scene.background = colorBlue.clone().lerp(colorPink, t);
  });
  return null;
}

export default function Scene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Canvas
      shadows
      camera={{ position: [5, 5, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ localClippingEnabled: true }}
    >
      <ambientLight intensity={isDark ? 0.1 : 1.5} />
      <pointLight position={[-10, -5, -10]} intensity={isDark ? 0.2 : 1} />
      <Environment
        preset={isDark ? "night" : "city"}
        environmentIntensity={isDark ? 0.2 : 1}
      />

      <Suspense fallback={null}>
        <ScrollControls pages={10} damping={0.1}>
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
