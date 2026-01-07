"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function CameraLogger() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleClick = () => {
      // 座標を丸めてログに出す
      const x = Math.round(camera.position.x * 100) / 100;
      const y = Math.round(camera.position.y * 100) / 100;
      const z = Math.round(camera.position.z * 100) / 100;

      const rx = Math.round(camera.rotation.x * 100) / 100;
      const ry = Math.round(camera.rotation.y * 100) / 100;
      const rz = Math.round(camera.rotation.z * 100) / 100;

      console.log(`位置 (position): [${x}, ${y}, ${z}]`);
      console.log(`回転 (rotation): [${rx}, ${ry}, ${rz}]`);
      alert(`コンソールに座標を出力しました！\npos: [${x}, ${y}, ${z}]`);
    };

    // キャンバスの要素にクリックイベントを追加
    gl.domElement.addEventListener("click", handleClick);
    return () => gl.domElement.removeEventListener("click", handleClick);
  }, [camera, gl]);

  return null;
}
