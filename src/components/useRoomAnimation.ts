import * as THREE from "three";
import { RefObject, useLayoutEffect } from "react";
import { useProgress } from "@react-three/drei";
import { gsap } from "gsap";

export const useRoomAnimation = (roomRef: RefObject<THREE.Group | null>) => {
  const { progress } = useProgress();

  useLayoutEffect(() => {
    const room = roomRef.current;
    if (!room || progress < 100) return;

    gsap.set(
      room.children.map((c) => c.scale),
      { x: 0, y: 0, z: 0 }
    );

    const tl = gsap.timeline({
      delay: 0.5,
      autoRemoveChildren: true,
    });

    const puzzle = room.children.find((child) => child.name === "puzzle");
    const otherItems = room.children.filter((child) => child !== puzzle);

    if (puzzle) {
      tl.to(puzzle.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.5,
        ease: "back.out(1.5)",
      });
      tl.to(
        puzzle.rotation,
        {
          y: Math.PI * 2,
          duration: 1.2,
          ease: "power2.out",
          onComplete: () => {
            puzzle.matrixAutoUpdate = false;
          },
        },
        "<"
      );
    }

    tl.to(
      otherItems.map((item) => item.scale),
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.6,
        stagger: 0.06,
        onComplete: () => {
          otherItems.forEach((item) => (item.matrixAutoUpdate = false));
        },
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, [roomRef, progress]);
};
