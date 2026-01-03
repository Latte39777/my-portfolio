"use client";

import { useEffect, useRef } from "react";

interface SineWaveProps {
  color?: string; // 線の色
  speed?: number; // 動く速さ
  amplitude?: number; // 振幅（波の高さ）
  frequency?: number; // 周波数（波の細かさ）
  height?: number; // SVG自体の高さ
}

export default function SineWave({
  color = "stroke-blue-500",
  speed = 0.05,
  amplitude = 50,
  frequency = 0.01,
  height = 200,
}: SineWaveProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      const path = pathRef.current;
      if (!path) return;

      phaseRef.current += speed;
      const phase = phaseRef.current;

      const width = window.innerWidth;

      let d = `M 0 ${height / 2}`;

      for (let x = 0; x <= width; x += 5) {
        const y = Math.sin(x * frequency + phase) * amplitude + height / 2;
        d += ` L ${x} ${y}`;
      }

      path.setAttribute("d", d);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [speed, amplitude, frequency, height]);

  return (
    <div className="w-full overflow-hidden" style={{ height }}>
      <svg width="100%" height="100%">
        <path
          ref={pathRef}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-colors ${color}`}
        />
      </svg>
    </div>
  );
}
