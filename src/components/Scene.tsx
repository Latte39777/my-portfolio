"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import CameraHandler from "@/components/CameraHandler";
import Footer from "@/components/layout/Footer";

import Top from "@/components/sections/Top";
import Works from "@/components/sections/Works";
import Skills from "@/components/sections/Skills";
import Profile from "@/components/sections/Profile";
import Contact from "@/components/sections/Contact";
import { Suspense } from "react";
import { Model } from "../../Room";

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 5, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ localClippingEnabled: true }}
    >
      <color attach="background" args={["#247bff"]} />
      <ambientLight intensity={2} />
      <pointLight position={[-10, -5, -10]} intensity={1} color="#ffe" />
      <Environment preset="city" />
      <Suspense fallback={null}>
        <ScrollControls pages={8} damping={0.1}>
          <Model />
          <CameraHandler />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
