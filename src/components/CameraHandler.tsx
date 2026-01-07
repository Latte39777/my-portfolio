"use client";

import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export function CameraHandler() {
  const scroll = useScroll();
  const vec = new THREE.Vector3();

  // --- 📍 キーポイント（カメラの座標リスト） ---
  // 1. スタート位置（遠く）
  const posStart = new THREE.Vector3(6, 5, 5);
  const lookStart = new THREE.Vector3(0, 0, 0);

  // 2. Topセクション（デスクに寄って止まる位置）
  const posTop = new THREE.Vector3(2, 0.5, 1);
  const lookTop = new THREE.Vector3(-3, 1, 0);

  // 3. Worksセクション（横に移動して止まる位置）
  const posWorks = new THREE.Vector3(4, 2, 3);
  const lookWorks = new THREE.Vector3(0, 0, 0);

  // 4. Contactセクション（上から見下ろす位置）
  const posContact = new THREE.Vector3(-2, 3, 4);
  const lookContact = new THREE.Vector3(0, 0, 0);

  useFrame((state, delta) => {
    // scroll.range(開始位置, 長さ) -> その区間の進捗率を 0〜1 で返す関数

    // --- 🎬 フェーズ1: スタート → Topへズーム (0% 〜 20%) ---
    // ここで「移動」する
    const r1 = scroll.range(0, 0.2);
    if (r1 > 0 && r1 < 1) {
      // posStart から posTop へ、r1 の割合だけ移動
      state.camera.position.lerpVectors(posStart, posTop, r1);

      // 視点も滑らかに変える（LookAtは直接補間できないので、Target座標を補間して向かせる）
      vec.lerpVectors(lookStart, lookTop, r1);
      state.camera.lookAt(vec);
    }

    // --- ⏸ フェーズ2: Topで「停止」 (20% 〜 40%) ---
    // ここはコンテンツをじっくり見る時間。カメラは posTop に固定（または超微細に動かす）
    const r2 = scroll.range(0.2, 0.2); // 長さ0.2
    if (r2 > 0 && r2 < 1) {
      // 固定（厳密には微調整を入れてもいいが、まずは固定でOK）
      state.camera.position.copy(posTop);
      state.camera.lookAt(lookTop);
    }

    // --- 🎬 フェーズ3: Top → Worksへ移動 (40% 〜 60%) ---
    const r3 = scroll.range(0.4, 0.2);
    if (r3 > 0 && r3 < 1) {
      state.camera.position.lerpVectors(posTop, posWorks, r3);
      vec.lerpVectors(lookTop, lookWorks, r3);
      state.camera.lookAt(vec);
    }

    // --- ⏸ フェーズ4: Worksで「停止」 (60% 〜 80%) ---
    const r4 = scroll.range(0.6, 0.2);
    if (r4 > 0 && r4 < 1) {
      state.camera.position.copy(posWorks);
      state.camera.lookAt(lookWorks);
    }

    // --- 🎬 フェーズ5: Works → Contactへ移動 (80% 〜 100%) ---
    const r5 = scroll.range(0.8, 0.2);
    if (r5 > 0) {
      state.camera.position.lerpVectors(posWorks, posContact, r5);
      vec.lerpVectors(lookWorks, lookContact, r5);
      state.camera.lookAt(vec);
    }
  });

  return null;
}
