"use client";

// 制作物データ（適宜書き換えてください）
const projects = [
  {
    title: "Portfolio Site",
    desc: "Next.js & Three.js",
    url: "#",
  },
  {
    title: "Music Video",
    desc: "Blender & DaVinci Resolve",
    url: "#",
  },
  {
    title: "Web App",
    desc: "React & Supabase",
    url: "#",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="flex h-screen w-full items-center p-4 md:justify-start md:pl-32"
    >
      <div className="animate-fade-in-up w-full max-w-3xl rounded-[2.5rem] border-[6px] border-white/60 bg-white/40 px-10 py-24 shadow-2xl backdrop-blur-md md:px-10 md:py-32">
        <h2 className="mb-6 text-center text-4xl font-black tracking-widest text-cyan-400 drop-shadow-sm">
          WORKS
        </h2>

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              className="group relative overflow-hidden rounded-xl bg-white/60 p-4 transition-all hover:scale-105 hover:bg-white/90 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-gray-500">
                {project.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
