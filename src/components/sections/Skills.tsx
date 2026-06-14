"use client";

import { TYPO } from "@/lib/constants";
import { motion } from "framer-motion";

const techStack = [
  {
    category: "Web Application",
    items: [
      "Next.js",
      "TypeScript",
      "React",
      "WebSocket",
      "Java (Android Studio)",
    ],
  },
  {
    category: "Data & AI",
    items: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "Django",
    ],
  },
  {
    category: "Infrastructure & DB",
    items: ["Docker", "GCP (GCE)", "SQL", "MongoDB", "DB Design (2PL, Schema)"],
  },
  {
    category: "Fundamental",
    items: ["Network Analysis (Wireshark)", "System Architecture"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="absolute left-0 flex min-h-screen w-full items-center justify-center p-4 md:justify-start md:pl-32"
      style={{ top: "860vh", transform: "translateY(-50%)" }}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl rounded-[3rem] border-[4px] border-white/20 bg-[#5d4037]/90 p-10 text-white shadow-2xl backdrop-blur-md md:p-16"
      >
        <h2 className={`${TYPO.h2} mb-12 text-center`}>SKILLS & BACKGROUND</h2>

        {/* チームプロジェクトへの言及 */}
        <div className="mb-12 border-l-4 border-cyan-400 pl-6">
          <p className="mb-1 text-sm font-bold tracking-widest text-cyan-200 uppercase">
            Current Project
          </p>
          <p className="text-lg font-bold">
            少子高齢化社会の課題解決に向けたWebアプリケーション開発
          </p>
          <p className="mt-2 text-sm opacity-80">
            IT技術を用いた社会課題解決を目指し、チーム開発をリードしています。
          </p>
        </div>

        {/* スキル一覧 */}
        <div className="grid gap-8 md:grid-cols-2">
          {techStack.map((stack, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-black tracking-tighter text-orange-200 uppercase">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
