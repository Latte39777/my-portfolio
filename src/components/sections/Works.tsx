"use client";

import Image from "next/image";
import { TYPO } from "@/lib/constants";
import { motion } from "framer-motion";

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
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl rounded-[3rem] border-[4px] border-white/20 bg-[#5d4037]/90 px-8 py-16 text-white shadow-2xl backdrop-blur-md md:px-12 md:py-20"
      >
        {/* セクションタイトル: TYPO.h2 */}
        <h2 className={`${TYPO.h2} mb-10 text-center`}>WORKS</h2>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              className="group flex items-center gap-6 overflow-hidden rounded-2xl border border-white/5 bg-white/10 p-4 shadow-sm transition-all"
            >
              {/* サムネイル */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                ) : (
                  // No Imageラベル: TYPO.label
                  <div
                    className={`${TYPO.label} absolute inset-0 flex items-center justify-center p-2 text-center`}
                  >
                    No Image
                  </div>
                )}
              </div>

              {/* テキストコンテンツ */}
              <div className="flex-1">
                {/* プロジェクト名: TYPO.h3 */}
                <h3 className={TYPO.h3}>{project.title}</h3>
                {/* 説明文: TYPO.p */}
                <p className={TYPO.p}>{project.desc}</p>
              </div>

              {/* 矢印アイコン: TYPO.cyan (モニター光とリンク) */}
              <div
                className={`${TYPO.cyan} text-2xl opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100`}
              >
                →
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
