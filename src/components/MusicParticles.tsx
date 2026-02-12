"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function SingleNote({
  texture,
  position,
}: {
  texture: THREE.Texture;
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Sprite>(null);

  // --- すべてのランダム値を useState の初期化関数（Pureな場所）で生成 ---
  const [speed] = useState(() => 0.003 + Math.random() * 0.005);
  const [offset] = useState(() => Math.random() * Math.PI * 2);
  const [waitDuration] = useState(() => Math.random() * 1);
  const [initialDelay] = useState(() => Math.random() * 1);

  // stableになった initialDelay を useRef に渡す
  const nextStartTime = useRef(initialDelay);
  const startY = position[1];

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;

    // 待機時間判定
    if (time < nextStartTime.current) {
      ref.current.visible = false;
      return;
    }
    ref.current.visible = true;

    // 1. 上昇
    const activeTime = (time - nextStartTime.current) * 60;
    ref.current.position.y = startY + activeTime * speed;

    // 2. 左右のゆらゆら
    ref.current.position.x = position[0] + Math.sin(time + offset) * 0.08;
    ref.current.position.z = position[2] + Math.cos(time + offset) * 0.08;

    // 3. ライフサイクル
    const height = ref.current.position.y - startY;
    const maxPath = 0.5;

    if (height > maxPath) {
      ref.current.position.y = startY;
      nextStartTime.current = time + waitDuration;
    } else {
      // 0.5秒で消える設定なら、0.5で割る
      const opacity = Math.sin((height / maxPath) * Math.PI);
      ref.current.material.opacity = opacity * 0.6;
    }
  });

  return (
    <sprite ref={ref} position={position} scale={[0.12, 0.12, 0.12]}>
      <spriteMaterial
        map={texture}
        transparent
        opacity={0}
        color="#FFD700"
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  );
}

export function MusicParticles() {
  const texture = useTexture("/note.png");
  const count = 2;

  const [positions] = useState<[number, number, number][]>(() => {
    const centerX = 0.424;
    const centerY = 1.105;
    const centerZ = -1.162;

    return Array.from({ length: count }, () => [
      centerX + (Math.random() - 0.5) * 0.1,
      centerY,
      centerZ + (Math.random() - 0.5) * 0.1,
    ]);
  });

  return (
    <group>
      {positions.map((pos, i) => (
        <SingleNote key={i} texture={texture} position={pos} />
      ))}
    </group>
  );
}
