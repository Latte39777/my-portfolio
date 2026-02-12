"use client";

import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useProgress, useScroll } from "@react-three/drei";

export default function CameraHandler() {
  const scroll = useScroll();
  const { progress } = useProgress(); // ロード進捗
  const { width } = useThree((state) => state.size);
  const isMobile = width < 768;

  const pcOffset = !isMobile && width < 1200 ? (1200 - width) * 0.01 : 0;

  const commonOffset = width < 1200 ? (1200 - width) * 0.01 : 0;

  const vec = new THREE.Vector3();

  // 1. Top初期位置
  const posStart = isMobile
    ? new THREE.Vector3(6.5, 4, 3)
    : new THREE.Vector3(
        0.5 + pcOffset * 1.5,
        3 + pcOffset,
        6 + pcOffset * 0.05
      );

  const lookStart = isMobile
    ? new THREE.Vector3(0, 0, 0)
    : new THREE.Vector3(0.5 - pcOffset, 0.5 - pcOffset, 0 - pcOffset * 1.1);

  // 2. Works
  const posWorks = isMobile
    ? new THREE.Vector3(0, 3, 2)
    : new THREE.Vector3(1, 1.5, 1 + pcOffset * 0.2);

  const lookWorks = isMobile
    ? new THREE.Vector3(-2, 0, 0)
    : new THREE.Vector3(-3, 1, 0);

  // 3. Profile
  const posProfile = isMobile
    ? new THREE.Vector3(2, 1, 1.5)
    : new THREE.Vector3(
        0.7 + pcOffset * 0.2,
        0.4 + pcOffset * 0.25,
        0.6 + pcOffset * 0.15
      );

  const lookProfile = isMobile
    ? new THREE.Vector3(-5, -1, -5)
    : new THREE.Vector3(-5, -1 - pcOffset * 0.2, -5);

  // 4. Skills
  const posSkills = new THREE.Vector3(
    0.3 - commonOffset * 0.05,
    2.5,
    -0.5 - commonOffset * 0.05
  );

  const lookSkills = new THREE.Vector3(3, -10, -3);

  // 5. Contact & Footer
  const posContact = new THREE.Vector3(
    1.7 - commonOffset * 0.01,
    2 + commonOffset * 0.2,
    2.7 + commonOffset * 0.1
  );

  const lookContact = new THREE.Vector3(1, -3.5 - commonOffset * 0.25, -6);

  useFrame((state) => {
    // ロードが終わるまでは初期位置に固定
    if (progress < 100) {
      state.camera.position.copy(posStart);
      state.camera.lookAt(lookStart);
      return;
    }

    // --- スクロール演出のタイムライン設計 ---
    // r1: 0.15 〜 0.25 で移動（開始から15%はTopで完全停止、移動後0.4まで静止）
    const r1 = scroll.range(0.15, 0.1);
    // r2: 0.4 〜 0.5 で移動（0.65まで静止）
    const r2 = scroll.range(0.4, 0.1);
    // r3: 0.65 〜 0.75 で移動（0.9まで静止）
    const r3 = scroll.range(0.65, 0.1);
    // r4: 0.9 〜 0.97 で移動（最後3%だけ余韻として停止）
    const r4 = scroll.range(0.9, 0.05);

    // 1. まず Top -> Works の移動を適用
    state.camera.position.lerpVectors(posStart, posWorks, r1);
    vec.lerpVectors(lookStart, lookWorks, r1);

    // 2. r2 が動き出したら Works -> Profile へ上書き移動
    if (r2 > 0) {
      state.camera.position.lerpVectors(posWorks, posProfile, r2);
      vec.lerpVectors(lookWorks, lookProfile, r2);
    }

    // 3. r3 が動き出したら Profile -> Skills へ上書き移動
    if (r3 > 0) {
      state.camera.position.lerpVectors(posProfile, posSkills, r3);
      vec.lerpVectors(lookProfile, lookSkills, r3);
    }

    // 4. r4 が動き出したら Skills -> Contact へ上書き移動
    if (r4 > 0) {
      state.camera.position.lerpVectors(posSkills, posContact, r4);
      vec.lerpVectors(lookSkills, lookContact, r4);
    }

    state.camera.lookAt(vec);
  });

  return null;
}
