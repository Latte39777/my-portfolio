"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("送信しました！（機能は別途実装してください）");
  };

  return (
    <section
      id="contact"
      className="flex h-screen w-full items-center justify-center p-4"
    >
      <div className="animate-fade-in-up w-full max-w-3xl rounded-[2.5rem] border-[6px] border-white/60 bg-white/40 p-8 shadow-2xl backdrop-blur-md md:p-14">
        {/* タイトル：text-cyan-400 ではなく text-primary を使用 */}
        <h2 className="text-primary mb-8 text-center text-4xl font-black tracking-widest drop-shadow-sm">
          CONTACT
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* お名前入力 */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="ml-2 text-lg font-bold text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="お名前"
              // focus時の色も primary に変更
              className="focus:border-primary w-full rounded-2xl border-4 border-white/50 bg-white/80 px-6 py-4 text-lg font-medium text-gray-800 transition-all outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-cyan-100"
              required
            />
          </div>

          {/* メールアドレス入力 */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="ml-2 text-lg font-bold text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="focus:border-primary w-full rounded-2xl border-4 border-white/50 bg-white/80 px-6 py-4 text-lg font-medium text-gray-800 transition-all outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-cyan-100"
              required
            />
          </div>

          {/* メッセージ入力 */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="ml-2 text-lg font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="お問い合わせ内容..."
              className="focus:border-primary w-full resize-none rounded-2xl border-4 border-white/50 bg-white/80 px-6 py-4 text-lg font-medium text-gray-800 transition-all outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-cyan-100"
              required
            />
          </div>

          {/* 送信ボタン */}
          {/* 背景色を primary に、ホバーで少し濃い cyan-500 になるように設定 */}
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-cyan-500 py-5 text-2xl font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-cyan-500 hover:shadow-xl active:scale-95"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}
