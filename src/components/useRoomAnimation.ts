// useRoomAnimation.ts
import { RefObject, useLayoutEffect } from "react";
import * as THREE from "three";
import { useProgress } from "@react-three/drei";
import { gsap } from "gsap";

// useRoomAnimation.ts
export const useRoomAnimation = (roomRef: RefObject<THREE.Group | null>) => {
  const { progress } = useProgress();

  useLayoutEffect(() => {
    const room = roomRef.current;
    if (!room || progress < 100) return;

    // 1. 下準備：全員をスケール0にする
    gsap.set(
      room.children.map((child) => child.scale),
      { x: 0, y: 0, z: 0 }
    );

    const tl = gsap.timeline({ delay: 0.5 });

    // 2. パズルを特定
    const puzzle = room.children.find((child) => child.name === "pazzle");
    const otherItems = room.children.filter((child) => child !== puzzle);

    if (puzzle) {
      // --- パズルの登場（一番最初） ---
      tl.to(puzzle.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2,
        ease: "back.out(2)", // 少し強めに弾ませる
      });

      tl.to(
        puzzle.rotation,
        {
          y: Math.PI * 2, // 2回転
          duration: 1.2,
          ease: "power2.out",
        },
        "<"
      ); // スケールと同時に開始
    }

    // 3. 他のパーツをパラパラ出す（パズルの回転が終わる少し前に開始）
    tl.to(
      otherItems.map((item) => item.scale),
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: "back.out(1.2)",
      },
      "-=0.6"
    ); // パズルのアニメーションが半分くらい終わったらスタート
  }, [roomRef, progress]);
};
