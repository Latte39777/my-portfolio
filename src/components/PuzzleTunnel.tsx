"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Box, Environment } from "@react-three/drei";
import * as THREE from "three";

// シーンの中身（ここでスクロールの動きを制御します）
const SceneContent = () => {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // scroll.offset はスクロール位置に応じて 0（上）〜 1（下）の値を取ります
    const offset = scroll.offset;

    // --- カメラを動かして近づける処理 ---
    // 初期位置 Z=5 から、スクロールするにつれて Z=2 まで近づく
    // 数式: 5 - (offset * 3)
    state.camera.position.z = 5 - offset * 3;

    // --- (おまけ) オブジェクトも少し回転させてみる ---
    if (meshRef.current) {
      meshRef.current.rotation.x = offset * Math.PI * 2;
      meshRef.current.rotation.y = offset * Math.PI;
    }
  });

  return (
    <>
      <Box args={[1, 1, 1]} ref={meshRef}>
        <meshStandardMaterial color={"orange"} />
      </Box>
    </>
  );
};

export default function ScrollScene() {
  return (
    // Tailwindで親要素に高さを持たせる必要があります
    <div className="h-screen w-full bg-gray-900 [-ms-overflow-style:none] [scrollbar-width:none] [&_*::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
      <Canvas>
        {/* 光源の設定 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* pages={3}: 画面の高さの3倍分のスクロール領域を作る
          damping={0.1}: スクロールの慣性（滑らかさ）
        */}
        <ScrollControls pages={3} damping={0.1}>
          <SceneContent />
        </ScrollControls>
      </Canvas>

      {/* ユーザーへのヒント */}
      <div className="pointer-events-none absolute top-10 left-10 text-white">
        <h1 className="text-2xl font-bold">Scroll Down</h1>
        <p>スクロールするとカメラがCubeに近づきます</p>
      </div>
    </div>
  );
}
