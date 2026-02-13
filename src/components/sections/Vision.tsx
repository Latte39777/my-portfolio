"use client";

import { motion } from "framer-motion";
import { TYPO } from "@/lib/constants";

export default function Vision() {
  return (
    <section
      id="vision"
      className="absolute left-0 flex min-h-screen w-full items-center justify-center p-4 md:justify-end md:pr-32"
      style={{ top: "540vh" }}
    >
      <motion.div className="w-full max-w-2xl rounded-[3rem] border-[4px] border-white/20 bg-[#5d4037]/90 px-8 py-12 text-white shadow-2xl backdrop-blur-md md:px-12 md:py-20">
        <h2 className={`${TYPO.h2} mb-10 text-center`}>VISION</h2>

        <div className="space-y-10">
          {/* 第1章：きっかけ・ルーツ */}
          <div className="relative border-l-2 border-orange-200/30 pl-6">
            <h3
              className={`${TYPO.p} mb-2 font-black tracking-tighter text-orange-200 uppercase`}
            >
              01. The Origin
            </h3>
            <p className={`${TYPO.h3} mb-1 text-orange-50`}>
              中学時代に見たミュージックビデオに衝撃を受け、自分でも「人の心を動かす映像」を作りたいと思ったのが全ての始まりです。
            </p>
          </div>

          {/* 第2章：現在のこだわり */}
          <div className="relative border-l-2 border-orange-200/30 pl-6">
            <h3
              className={`${TYPO.p} mb-2 font-black tracking-tighter text-orange-200 uppercase`}
            >
              02. My Belief
            </h3>
            <p className={`${TYPO.h3} mb-1 text-orange-50`}>
              現在はINIADでプログラミングを学びつつ、3DとWebを融合させた新しい表現を模索しています。「技術は人を驚かせるための魔法」だと信じて、細部のクオリティに妥協しない制作を心がけています。
            </p>
          </div>

          {/* 第3章：これからの夢 */}
          <div className="relative border-l-2 border-orange-200/30 pl-6">
            <h3
              className={`${TYPO.p} mb-2 font-black tracking-tighter text-orange-200 uppercase`}
            >
              03. The Future
            </h3>
            <p className={`${TYPO.h3} mb-1 text-orange-50`}>
              将来は、Webと3Dの境界線をなくすようなテクニカルアーティストとして、世界中の人が没入できるデジタルワールドを創造するのが目標です。
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
