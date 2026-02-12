"use client";

import { TYPO } from "@/lib/constants";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section
      id="contact"
      className="absolute left-0 flex h-screen w-full items-center justify-center overflow-hidden p-4 md:justify-end md:pr-32"
      style={{ top: "900vh" }}
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-xl rounded-[3rem] border-[4px] border-white/20 bg-[#5d4037]/90 px-8 py-12 text-center text-white shadow-2xl backdrop-blur-md md:px-10 md:py-16"
      >
        {/* セクションタイトル: TYPO.h2 */}
        <h2 className={`${TYPO.h2} mb-6`}>CONTACT</h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4 text-left"
        >
          <input
            type="hidden"
            name="access_key"
            value="b9957593-01be-4f7c-a0b4-5ca10b4b9a4d"
          />
          <input
            type="hidden"
            name="subject"
            value="Portfolioからの問い合わせ"
          />

          {/* 各入力項目のラベル: TYPO.label */}
          <div>
            <label className={`${TYPO.label} ml-2 text-orange-200/60`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="お名前"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white transition-colors focus:border-orange-300 focus:outline-none"
            />
          </div>

          <div>
            <label className={`${TYPO.label} ml-2 text-orange-200/60`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="メールアドレス"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white transition-colors focus:border-orange-300 focus:outline-none"
            />
          </div>

          <div>
            <label className={`${TYPO.label} ml-2 text-orange-200/60`}>
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="メッセージを入力してください"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white transition-colors focus:border-orange-300 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-white py-4 text-sm font-black tracking-[0.2em] text-[#5d4037] uppercase shadow-xl transition-all hover:bg-orange-100 active:scale-95"
          >
            Send Message
          </button>
        </form>

        {/* フォールバック・コピーライト: TYPO.label */}
        <div className="mt-8 space-y-2 border-t border-white/5 pt-6">
          <p className={`${TYPO.label} tracking-widest text-orange-200/40`}>
            OR EMAIL:{" "}
            <a
              href="mailto:latte.works.4649@gmail.com"
              className="underline underline-offset-4 hover:text-orange-200"
            >
              latte.works.4649@gmail.com
            </a>
          </p>
          <p className={`${TYPO.label} tracking-[0.5em]`}>
            © 2026 Kotaro Misawa
          </p>
        </div>
      </motion.div>
    </section>
  );
}
