"use client";

export default function Top() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center px-10">
      <div className="z-10">
        {/* 3Dより手前に出す */}
        <p className="mb-2 font-bold tracking-widest text-cyan-400">
          PORTFOLIO
        </p>
        <h1 className="text-6xl font-black text-slate-800">
          YOUR NAME<span className="text-cyan-400">.</span>
        </h1>
        <h2 className="mt-4 text-2xl font-medium text-slate-500">
          Creative Developer / 3D Artist
        </h2>
        <div className="mt-8 h-1 w-20 bg-cyan-400"></div> {/* アクセントの線 */}
      </div>
    </section>
  );
}
