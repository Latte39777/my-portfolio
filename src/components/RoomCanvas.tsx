"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/room.glb");

  return <primitive object={scene} position={[0, -1, 0]} />;
}

export default function RoomCanvas() {
  return (
    <div className="h-screen w-full bg-gray-100">
      {" "}
      <Canvas camera={{ position: [5, 4, 5], fov: 50 }} shadows>
        <ambientLight intensity={1.5} />

        <directionalLight position={[5, 10, 5]} intensity={2} castShadow />

        <Model />

        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.3}
          scale={10}
          blur={2}
          far={4}
        />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

// プリロードしておくと読み込みがスムーズになります
useGLTF.preload("/room.glb");
