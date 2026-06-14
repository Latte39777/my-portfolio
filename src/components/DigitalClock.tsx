"use client";

import { useEffect, useState } from "react";
import { Text } from "@react-three/drei";

export function DigitalClock() {
  const [timeStr, setTimeStr] = useState(() =>
    new Date().toLocaleTimeString("ja-JP", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  useEffect(() => {
    const updateClock = () => {
      setTimeStr(
        new Date().toLocaleTimeString("ja-JP", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    const timerId = window.setInterval(updateClock, 1000);
    updateClock();

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  return (
    <Text
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
      {timeStr}
    </Text>
  );
}
