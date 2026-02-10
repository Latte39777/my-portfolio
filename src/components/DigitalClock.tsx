"use client";

import { Text } from "@react-three/drei";
import { useState, useEffect } from "react";

const TextComponent = Text as any;

export function DigitalClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("ja-JP", { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <TextComponent
      position={[0, 0, 0.051]}
      fontSize={0.06}
      color="#464646"
      anchorX="center"
      anchorY="middle"
      maxWidth={0.3}
      textAlign="center"
      letterSpacing={-0.05}
      scale={[1, 1.5, 1]}
      font="digital-7 (mono).ttf"
    >
      {time}
      <meshStandardMaterial
        emissive="#005b9b"
        emissiveIntensity={10}
        toneMapped={false}
      />
    </TextComponent>
  );
}
