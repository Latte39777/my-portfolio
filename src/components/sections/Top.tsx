"use client";

import RoomCanvas from "@/components/RoomCanvas";

export default function Top() {
  return (
    <section className="relative h-screen w-full">
      {/* 3Dモデルを配置 */}
      <RoomCanvas />

      {/* その上に文字を重ねたい場合 */}
      <div className="pointer-events-none absolute top-0 left-0 p-10">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </div>
    </section>
  );
}
