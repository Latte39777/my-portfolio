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
    title: "NumberTalk",
    desc: "React / TypeScript / Supabase / Vercel / Schema",
    url: "https://my-ito-app.vercel.app/",
    thumbnail: "/works/numberTalk.png",
  },
  {
    title: "Original 3D Character 'Kon'",
    desc: "Blender / Substance Painter",
    url: "https://skfb.ly/pKVVB",
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
      className="absolute top-[270vh] left-0 flex min-h-screen w-full -translate-y-1/2 items-center justify-center p-4 md:top-[340vh] md:justify-start md:pl-32"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl rounded-2xl border-[4px] border-white/20 bg-[#5d4037]/90 px-5 py-10 text-white shadow-2xl backdrop-blur-md md:rounded-[3rem] md:px-12 md:py-20"
      >
        {/* セクションタイトル: TYPO.h2 */}
        <h2 className={`${TYPO.h2} mb-6 text-center md:mb-10`}>WORKS</h2>

        <div className="flex flex-col gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              className="group flex items-center gap-3 overflow-hidden rounded-2xl border border-white/5 bg-white/10 p-3 shadow-sm transition-all md:gap-6 md:p-4"
            >
              {/* サムネイル */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/10 md:h-20 md:w-20">
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
