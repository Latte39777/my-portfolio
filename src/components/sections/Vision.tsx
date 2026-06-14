"use client";

import { motion } from "framer-motion";
import { TYPO } from "@/lib/constants";

export default function Vision() {
  return (
    <section
      id="vision"
      className="absolute left-0 flex min-h-screen w-full items-center justify-center p-4 md:justify-end md:pr-32"
      style={{
        top: "600vh",
        transform: "translateY(-50%)",
      }}
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl rounded-[3rem] border-[4px] border-white/20 bg-[#5d4037]/90 px-8 py-12 text-white shadow-2xl backdrop-blur-md md:px-12 md:py-20"
      >
        <h2 className={`${TYPO.h2} mb-10 text-center`}>VISION</h2>

        <div className="space-y-10">
          {/* 第1章：体験の拡張への興味 */}
          <div className="relative border-l-2 border-orange-200/30 pl-6">
            <h3
              className={`${TYPO.p} mb-2 font-black tracking-tighter text-orange-200 uppercase`}
            >
              01. The Origin
            </h3>
            <p className={`${TYPO.h3} mb-1 text-orange-50`}>
              映像作品やインタラクティブなデジタルアートに衝撃を受け、「自分も人の心を揺さぶるような『体験』を技術で創り出したい」と思ったのがエンジニアを志した原点です。
            </p>
          </div>

          {/* 第2章：情報連携の学びと、フロントエンド/3Dの融合 */}
          <div className="relative border-l-2 border-orange-200/30 pl-6">
            <h3
              className={`${TYPO.p} mb-2 font-black tracking-tighter text-orange-200 uppercase`}
            >
              02. My Belief
            </h3>
            <p className={`${TYPO.h3} mb-1 text-orange-50`}>
              大学では情報連携やシステム構築の基礎を固めつつ、個人ではWebと3Dを用いた新しい表現を模索しています。単に美しい見た目を作るだけでなく、それを支える堅牢でパフォーマンスの高いWebアプリケーション開発にこだわりを持っています。
            </p>
          </div>

          {/* 第3章：チームラボの理念「境界のない」「共創」を連想させる未来像 */}
          <div className="relative border-l-2 border-orange-200/30 pl-6">
            <h3
              className={`${TYPO.p} mb-2 font-black tracking-tighter text-orange-200 uppercase`}
            >
              03. The Future
            </h3>
            <p className={`${TYPO.h3} mb-1 text-orange-50`}>
              デジタルとリアルの「境界」をなくすような、新しい体験の基盤を創るWebエンジニアになることが目標です。多様な専門性を持つ人たちとのチームでの「共創」を通じて、世界中を驚かせるようなシステムを手がけたいです。
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
