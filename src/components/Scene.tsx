"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei"; // ★追加
import { Room } from "@/components/Room";
import { CameraHandler } from "@/components/CameraHandler"; // ★追加
import Footer from "./layout/Footer";

const Section = ({ title, color }: { title: string; color: string }) => (
  <section
    className={`flex h-screen w-screen items-center justify-start p-20 ${color}`}
  >
    <h1 className="rounded bg-black/50 p-4 text-6xl font-bold text-white">
      {title}
    </h1>
  </section>
);

export default function Scene() {
  return (
    <div className="h-screen w-full bg-gray-100">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={3} castShadow />

        {/* pages={3} : 「3画面分のスクロール量」を作る
           damping={0.2} : スクロールの「慣性（余韻）」をつける
        */}
        <ScrollControls pages={6} damping={0.2}>
          <Room />
          <CameraHandler /> {/* これが入ることでカメラが動く！ */}
          <Scroll html style={{ width: "100%", height: "100%" }}>
            <Section title="Top" color="text-white" />
            <Section title="Works" color="text-yellow-400" />
            <Section title="Contact" color="text-blue-400" />
            <footer className="absolute w-screen" style={{ top: "500vh" }}>
              <Footer />
            </footer>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
