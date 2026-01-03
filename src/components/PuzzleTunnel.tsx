"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { ScrollControls, useScroll, Center } from "@react-three/drei"; // Centerを追加
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"; // SVGLoaderをインポート

interface ExtrudedSvgProps {
  url: string;
}

// SVGを押し出して3D化するコンポーネント
const ExtrudedSvg = ({ url, ...props }: ExtrudedSvgProps) => {
  // SVGをロード
  const svgData = useLoader(SVGLoader, url);

  // パスをシェイプ（2D形状）に変換し、メモ化（再計算防止）
  const shapes = useMemo(() => {
    return svgData.paths.flatMap((path) => {
      // isCCW: true は穴あきポリゴン（ドーナツ型など）を正しく処理するため
      return path.toShapes(true);
    });
  }, [svgData]);

  return (
    <group {...props} scale={[0.01, -0.01, 0.01]}>
      {/* SVGは通常Y軸が逆＆巨大なので調整 */}
      <Center top>
        {/* 中心に配置 */}
        {shapes.map((shape, index) => (
          <mesh key={index}>
            {/* depth: 厚さ, bevelEnabled: 面取りの有無 */}
            <extrudeGeometry
              args={[shape, { depth: 50, bevelEnabled: false }]}
            />
            <meshStandardMaterial color="orange" />
          </mesh>
        ))}
      </Center>
    </group>
  );
};

const SceneContent = () => {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const offset = scroll.offset;

    // --- カメラを動かして近づける処理 ---
    // SVGのサイズ感に合わせて少し距離調整しました
    state.camera.position.z = 10 - offset * 5;

    // --- SVGを回転させる ---
    if (groupRef.current) {
      groupRef.current.rotation.x = offset * Math.PI * 0.5; // 少し傾ける
      groupRef.current.rotation.y = offset * Math.PI;
    }
  });

  return (
    <group ref={groupRef}>
      <ExtrudedSvg url="/vercel.svg" />
    </group>
  );
};

export default function ScrollScene() {
  return (
    <div className="h-screen w-full bg-gray-900 [-ms-overflow-style:none] [scrollbar-width:none] [&_*::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ScrollControls pages={3} damping={0.1}>
          <SceneContent />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
