"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TYPO } from "@/lib/constants";

export default function Profile() {
  return (
    <section
      id="profile"
      className="absolute top-[130vh] left-0 flex min-h-screen w-full -translate-y-1/2 items-center justify-center p-4 md:top-[160vh] md:justify-end md:pr-32"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-full max-w-xl rounded-2xl border-[4px] border-white/20 bg-[#5d4037]/90 px-6 py-10 text-white shadow-2xl backdrop-blur-md md:mx-0 md:rounded-[3rem] md:px-10 md:py-16"
      >
        {/* セクションタイトル: TYPO.h2 */}
        <h2 className={`${TYPO.h2} mb-6 text-center md:mb-10`}>PROFILE</h2>

        <div className="space-y-6 text-center md:space-y-8">
          <div className="flex flex-col items-center">
            {/* アイコン枠: TYPO.cyan の glow を薄く適用 */}
            <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] md:mb-6 md:h-32 md:w-32">
              <Image
                src="/cat.png"
                alt="My Icon"
                fill
                className="object-cover"
              />
            </div>

            {/* 名前: TYPO.h3 をベースに調整 */}
            <p className={`${TYPO.h3} mb-1`}>見澤 鼓太郎</p>

            {/* 肩書き: TYPO.label */}
            <p className={TYPO.label}>Student / Developer</p>
          </div>

          {/* 自己紹介エリア */}
          <div className="rounded-2xl border border-white/5 bg-white/10 p-4 text-left shadow-inner md:p-6">
            <p className={`${TYPO.p} mb-4`}>
              INIAD (Toyo Univ) Student. <br />I love creating web applications
              and 3D graphics.
            </p>

            {/* 趣味: Likesを TYPO.cyan で光らせる */}
            <div className={TYPO.p}>
              <span className={`${TYPO.cyan} mr-2 text-xs`}>●</span>
              <span className="font-bold opacity-70">Likes:</span>
              <span className="ml-2 text-white">Cats 🐈, Singing 🎤</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
