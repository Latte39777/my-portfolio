"use client";

import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

// --- ここが足りなかった部分です！ ---
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

// メモリ節約用の作業用ベクトル
const _tempNormal = new THREE.Vector3();

export function MonitorContent({ monitorId = 0, width = 0.6, height = 0.4 }) {
  const groupRef = useRef<THREE.Group>(null);

  // クリッピング用の板
  const clippingPlanes = useMemo(
    () => [
      new THREE.Plane(),
      new THREE.Plane(),
      new THREE.Plane(),
      new THREE.Plane(),
    ],
    []
  );

  // マテリアルの共通化
  const shapeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#00ffff",
        emissive: "#51ffff",
        emissiveIntensity: 3,
        toneMapped: false,
        transparent: true,
        clippingPlanes: clippingPlanes,
        clipShadows: true,
      }),
    [clippingPlanes]
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    const updatePlane = (
      index: number,
      nx: number,
      ny: number,
      nz: number,
      dist: number
    ) => {
      _tempNormal.set(nx, ny, nz);
      clippingPlanes[index].set(_tempNormal, dist);
      clippingPlanes[index].applyMatrix4(groupRef.current!.matrixWorld);
    };

    updatePlane(0, 0, 1, 0, height / 2);
    updatePlane(1, 0, -1, 0, height / 2);
    updatePlane(2, 1, 0, 0, width / 2);
    updatePlane(3, -1, 0, 0, width / 2);

    const time = state.clock.elapsedTime;
    const halfH = height / 2;
    const halfW = width / 2;

    for (let i = 0; i < SHARED_COUNT; i++) {
      const child = groupRef.current.children[i];
      if (!child) continue;

      const s = SHARED_SHAPES[i];
      const cycle = 8;
      const progress = ((time + s.timeOffset) % cycle) / cycle;

      const localY = -halfH - 0.2 + (height + 0.4) * progress;
      const wavyX = Math.sin(time * s.wavySpeed + s.id) * s.wavyAmount;
      const localX = s.initialX + wavyX - monitorId * (width - 0.02);

      child.position.set(localX, localY, 0.01);
      child.visible = localX >= -halfW - 0.1 && localX <= halfW + 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {SHARED_SHAPES.map((s) => (
        <mesh key={s.id} material={shapeMaterial}>
          {s.isRing ? (
            <ringGeometry args={[s.size * 0.92, s.size, 32]} />
          ) : (
            <circleGeometry args={[s.size, 32]} />
          )}
        </mesh>
      ))}

      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          color="#c0c0c0"
          emissive={"#cbcbcb"}
          emissiveIntensity={3}
          transparent
        />
      </mesh>
    </group>
  );
}
