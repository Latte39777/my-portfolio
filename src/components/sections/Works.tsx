"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Minesweeper Game",
    desc: "React & Custom Hooks",
    url: "https://latte39777.github.io/costomHook-minesweeper/",
    thumbnail: "/works/minesweeper.png",
  },
  {
    title: "Todo App",
    desc: "React / TypeScript / Firebase",
    url: "https://todo-project-ac286.web.app",
  },
  {
    title: "二次創作 Music Video",
    desc: "Blender & DaVinci Resolve",
    url: "https://youtu.be/NtI8tBV_oWk?si=-rYpUfEUSW_l5Xlb",
    thumbnail: "/works/tensei-ringo.jpg",
  },
  {
    title: "二次創作 Music Video",
    desc: "Blender & DaVinci Resolve",
    url: "https://youtu.be/Fvc5N_ZfFGQ?si=HPjie4LGBlKF1lhq",
    thumbnail: "/works/HenceForth.jpg",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="absolute left-0 flex h-screen w-full items-center justify-center overflow-hidden p-4 md:justify-start md:pl-32"
      style={{ top: "270vh" }}
    >
      <motion.div
        // Profileと対比させるため「左から」出す（バランスが良いです）
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // ★ここをProfileと同じ茶色テーマに変更
        // bg-[#5d4037]/90, text-white, border-white/20
        className="w-full max-w-2xl rounded-[3rem] border-[4px] border-white/20 bg-[#5d4037]/90 px-8 py-16 text-white shadow-2xl backdrop-blur-md md:px-12 md:py-20"
      >
        {/* タイトル色をオレンジ系に */}
        <h2 className="mb-10 text-center text-4xl font-black tracking-widest text-orange-100 drop-shadow-sm">
          WORKS
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }} // ホバー時の色を少し明るく
              // リストアイテムの背景を薄い茶色（白の透明度下げ）に変更
              className="group flex items-center gap-6 overflow-hidden rounded-2xl border border-white/5 bg-white/10 p-4 shadow-sm transition-all"
            >
              {/* サムネイル画像エリア */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {project.thumbnail ? (
                  // 画像がある場合
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                ) : (
                  // 画像がない場合
                  <div className="absolute inset-0 flex items-center justify-center p-2 text-center text-[10px] font-bold text-orange-200/50 uppercase">
                    No Image
                  </div>
                )}
              </div>

              <div className="flex-1">
                {/* タイトル：白 → ホバーでオレンジ */}
                <h3 className="text-xl font-black text-white transition-colors group-hover:text-orange-200">
                  {project.title}
                </h3>
                {/* 説明文：少し落ち着いたオレンジベージュ */}
                <p className="text-sm font-bold text-orange-200/80">
                  {project.desc}
                </p>
              </div>

              {/* 矢印アイコン：オレンジ色 */}
              <div className="font-bold text-orange-300 opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100">
                →
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
