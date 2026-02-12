"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

type TextMesh = THREE.Mesh & { text: string };

export function DigitalClock() {
  const textRef = useRef<TextMesh>(null);
  useFrame(() => {
    if (!textRef.current) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString("ja-JP", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    if (textRef.current.text !== timeStr) {
      textRef.current.text = timeStr;
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 0, 0.051]}
      fontSize={0.06}
      color="#464646"
      anchorX="center"
      anchorY="middle"
      maxWidth={0.3}
      textAlign="center"
      letterSpacing={-0.05}
      scale={[1, 1.5, 1]}
      font="/fonts/digital-7.ttf"
    >
      <meshStandardMaterial
        emissive="#005b9b"
        emissiveIntensity={10}
        toneMapped={false}
      />
    </Text>
  );
}
