"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SHARED_COUNT = 10;
const SHARED_SHAPES = Array.from({ length: SHARED_COUNT }, (_, i) => ({
  id: i,
  initialX: (i / SHARED_COUNT) * 1.2 - 0.6,
  timeOffset: Math.random() * 10,
  size: 0.04 + Math.random() * 0.1,
  isRing: i % 2 === 0,
  wavySpeed: 1 + Math.random() * 2,
  wavyAmount: 0.005 + Math.random() * 0.01,
}));

export function MonitorContent({
  monitorId = 0,
  width = 0.6,
  height = 0.4,
  debug = false,
}) {
  const groupRef = useRef<THREE.Group>(null);

  // --- 【修正】切り取り線を保持するオブジェクト ---
  // 座標を後で更新するので、中身は空でOK
  const clippingPlanes = useMemo(
    () => [
      new THREE.Plane(), // 下
      new THREE.Plane(), // 上
      new THREE.Plane(), // 左
      new THREE.Plane(), // 右
    ],
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    // ★ 1. クリッピングプレーンをモニターの現在の位置・回転に同期させる
    // これをしないと、世界の中心（0,0,0）で切り取られてしまいます
    const transformPlane = (
      index: number,
      normal: THREE.Vector3,
      distance: number
    ) => {
      clippingPlanes[index].set(normal, distance);
      clippingPlanes[index].applyMatrix4(groupRef.current!.matrixWorld);
    };

    // モニターのローカル座標系での「端」を設定
    transformPlane(0, new THREE.Vector3(0, 1, 0), height / 2); // 下から上向き
    transformPlane(1, new THREE.Vector3(0, -1, 0), height / 2); // 上から下向き
    transformPlane(2, new THREE.Vector3(1, 0, 0), width / 2); // 左から右向き
    transformPlane(3, new THREE.Vector3(-1, 0, 0), width / 2); // 右から左向き

    // --- 2. 図形の移動計算 ---
    const time = state.clock.elapsedTime;
    const halfH = height / 2;

    groupRef.current.children.forEach((child, i) => {
      if (debug && i === SHARED_COUNT) return;

      const s = SHARED_SHAPES[i];
      const cycleDuration = 8;
      const progress = ((time + s.timeOffset) % cycleDuration) / cycleDuration;

      const startY = -halfH - 0.2;
      const endY = halfH + 0.2;
      const localY = startY + (endY - startY) * progress;

      const virtualX = s.initialX;
      const wavyX = Math.sin(time * s.wavySpeed + s.id) * s.wavyAmount;
      const localX = virtualX + wavyX - monitorId * (width - 0.02);

      child.position.set(localX, localY, 0.01);

      // 表示判定（モニターの担当エリアにいるか）
      const halfW = width / 2;
      child.visible = localX >= -halfW - 0.1 && localX <= halfW + 0.1;
    });
  });

  return (
    <group ref={groupRef}>
      {SHARED_SHAPES.map((s) => (
        <mesh key={s.id}>
          {s.isRing ? (
            // args={[内側の半径, 外側の半径, 分割数]}
            <ringGeometry args={[s.size * 0.92, s.size, 32]} />
          ) : (
            <circleGeometry args={[s.size, 32]} />
          )}
          <meshStandardMaterial
            color="#00abab"
            emissive="#00cece"
            emissiveIntensity={15}
            toneMapped={false}
            transparent
            opacity={0.5}
            clippingPlanes={clippingPlanes} // ★ 同期された切り取り線を適用
            clipShadows={true}
          />
        </mesh>
      ))}

      {debug && (
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.1} />
        </mesh>
      )}
    </group>
  );
}
