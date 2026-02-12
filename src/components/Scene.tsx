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
      shadows
      camera={{ position: [5, 5, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{
        localClippingEnabled: true,
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <ambientLight
        key={`ambientLight-${isDark}`}
        intensity={isDark ? 1.5 : 1.5}
        color={isDark ? "#7979b6" : "#ffffff"}
      />
      <pointLight
        key={`point-${theme}`}
        position={[-10, -5, -10]}
        intensity={isDark ? 1 : 1}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <Environment
        key={`env-${theme}`}
        preset={isDark ? "night" : "city"}
        environmentIntensity={isDark ? 1 : 1}
        background={false}
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
