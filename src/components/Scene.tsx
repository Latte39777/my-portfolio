"use client";

import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";

import { Model } from "./Fini";
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
  const colorBlue = useRef(new THREE.Color("#5b9cff"));
  const colorPink = useRef(new THREE.Color("#ffd1dc"));
  const backgroundColor = useRef(new THREE.Color("#5b9cff"));

  useFrame((state) => {
    const offset = scroll.offset;
    const t = THREE.MathUtils.smoothstep(offset, 0.45, 0.7);
    state.scene.background = backgroundColor.current
      .copy(colorBlue.current)
      .lerp(colorPink.current, t);
  });
  return null;
}

export default function Scene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{
        localClippingEnabled: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
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
