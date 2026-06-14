"use client";

export default function Top() {
  return (
    <section className="absolute top-0 left-0 flex min-h-screen w-full items-center justify-center p-4 px-6 text-center md:justify-start md:pl-32 md:text-left">
      <div className="z-10">
        <p className="mb-2 text-sm font-bold tracking-widest text-cyan-400 md:text-base">
          PORTFOLIO
        </p>
        <h1 className="text-4xl font-black text-slate-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] md:text-6xl">
          KOTARO MISAWA<span className="text-cyan-400"> .</span>
        </h1>
        <h2 className="mt-4 text-lg font-medium text-slate-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] md:text-2xl">
          Web Application Engineer / Creative Developer
        </h2>
        <div className="mt-6 h-1 w-40 bg-cyan-400 md:mt-8 md:w-100"></div>
      </div>
    </section>
  );
}
