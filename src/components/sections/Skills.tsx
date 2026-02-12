"use client";

import { TYPO } from "@/lib/constants";
import { motion } from "framer-motion";

const codingSkills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 70 },
  { name: "React / Next.js", level: 75 },
];

const creatorSkills = [
  { name: "Blender", level: 65 },
  { name: "DaVinci Resolve", level: 60 },
  { name: "Three.js / R3F", level: 55 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="absolute left-0 flex h-screen w-full items-center justify-center overflow-hidden p-4 md:justify-start md:pl-32"
      style={{ top: "740vh" }}
    >
      <motion.div
        // Worksと同じアニメーション設定
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // 茶色テーマで統一
        className="w-full max-w-2xl rounded-[3rem] border-[4px] border-white/20 bg-[#5d4037]/90 p-8 text-white shadow-2xl backdrop-blur-md md:p-12"
      >
        <h2 className={`${TYPO.h2} mb-8 text-center`}>SKILLS</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Coding */}
          <div>
            <h3 className={`${TYPO.h3} mb-6 flex items-center gap-2`}>
              <span className="opacity-80">💻</span> Coding
            </h3>
            <div className="flex flex-col gap-5">
              {codingSkills.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="mb-2 flex justify-between px-1 text-xs font-black tracking-tighter text-orange-100/80 uppercase">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full border border-white/5 bg-white/10 shadow-inner">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-orange-300 to-orange-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Creator */}
          <div>
            <h3 className={`${TYPO.h3} mb-6 flex items-center gap-2`}>
              <span className="opacity-80">🎨</span> Creator
            </h3>
            <div className="flex flex-col gap-5">
              {creatorSkills.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="mb-2 flex justify-between px-1 text-xs font-black tracking-tighter text-orange-100/80 uppercase">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full border border-white/5 bg-white/10 shadow-inner">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-orange-100 to-orange-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-10 ${TYPO.label}`}>
          Also learning: AWS, Docker, Unity, Unreal Engine
        </div>
      </motion.div>
    </section>
  );
}
