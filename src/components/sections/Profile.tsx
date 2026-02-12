"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section
      id="profile"
      className="flex h-screen w-full items-center justify-center overflow-hidden p-4 md:justify-end md:pr-32"
    >
      <motion.div
        // 1. 初期状態：右側に100pxズレていて、透明
        initial={{ x: 100, opacity: 0 }}
        // 2. 画面内に入った（ある地点に来た）時の状態
        whileInView={{ x: 0, opacity: 1 }}
        // 3. 戻る時の挙動（任意）
        viewport={{ once: false, amount: 0.4 }}
        // 4. アニメーションの速さ・滑らかさ
        transition={{ duration: 0.8, ease: "easeOut" }}
        // ★ 茶色のカード設定
        // bg-[#5d4037]（コーヒーのような深みのある茶色）
        // border-white/20 で少し高級感を出す
        className="mx-auto w-full max-w-xl rounded-[3rem] border-[4px] border-white/20 bg-[#5d4037]/90 px-10 py-16 text-white shadow-2xl backdrop-blur-md md:mx-0"
      >
        <h2 className="mb-6 text-center text-4xl font-black tracking-widest text-orange-100 drop-shadow-sm">
          PROFILE
        </h2>

        <div className="space-y-6 text-center font-medium">
          <div className="flex flex-col items-center">
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-orange-100/50 shadow-xl">
              <Image
                src="/cat.png" // パスを修正（./ではなく/）
                alt="My Icon"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-2xl font-bold tracking-tight">見澤 鼓太郎</p>
            <p className="text-sm font-bold tracking-[0.2em] text-orange-200/80 uppercase">
              Student / Developer
            </p>
          </div>

          {/* 自己紹介エリア：少し明るい茶色でコントラストをつける */}
          <div className="rounded-2xl border border-white/5 bg-white/10 p-6 text-left text-lg leading-relaxed">
            <p className="mb-3">
              INIAD (Toyo Univ) Student. <br />I love creating web applications
              and 3D graphics.
            </p>
            <p className="text-orange-100">
              <span className="font-bold opacity-70">Likes:</span> Cats 🐈,
              Singing 🎤
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
