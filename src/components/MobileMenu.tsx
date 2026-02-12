"use client";

import { useEffect, useState } from "react";
import SocialLinks from "@/components/SocialLinks";
import { Icons } from "@/components/ui/icons";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
  loading: () => <div className="h-6 w-[72px]" />,
});

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 500);
  };

  return (
    <div className="md:hidden">
      {/* --- トリガーボタン（パズルピース） --- */}
      <button
        className="fixed right-8 bottom-8 z-[60] rounded-full border border-white/20 bg-[#5d4037] p-3 text-white shadow-2xl outline-none"
        onClick={toggleMenu}
      >
        {isRippling && (
          <span className="absolute inset-0 z-[-1] animate-ping rounded-full bg-orange-200/40 opacity-75" />
        )}
        {/* 青い影(blue-300)からオレンジゴールド(orange-200)の影に変更 */}
        <div className="drop-shadow-[2px_2px_0px_#fed7aa]">
          <Icons.puzzlePiece
            size={30}
            className={`${
              isOpen ? "rotate-180" : ""
            } animate-[spin_8s_linear_infinite] text-orange-100 duration-300 ease-in-out`}
          />
        </div>
      </button>

      {/* 背景オーバーレイ */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-500 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* --- かまぼこメニュー（茶色テーマ） --- */}
      <nav
        className={`fixed right-0 bottom-0 left-0 z-50 mx-auto w-[94%] max-w-sm rounded-t-[2.5rem] border-x border-t border-white/20 bg-[#5d4037]/95 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* 全体のパディングを 8 -> 6、12 -> 8 に縮小 */}
        <div className="flex flex-col items-center p-6 pb-8">
          {/* 上段：SNS & トグル (mb-8 -> 4, pb-6 -> 4 に縮小) */}
          <div className="mb-4 flex w-full items-center justify-between border-b border-white/5 px-2 pb-4">
            <div className="origin-left scale-75">
              {" "}
              {/* 少し小さくして余白を節約 */}
              <SocialLinks />
            </div>
            <ThemeToggle />
          </div>

          {/* 下段：コンタクトボタン (py-4 -> 3.5 に微調整) */}
          <div className="w-full px-2">
            <a
              href="#contact"
              className="block w-full rounded-full bg-white py-3.5 text-center text-[10px] font-black tracking-[0.2em] text-[#5d4037] uppercase shadow-xl transition-transform active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </div>

          {/* 閉じるボタン (mt-8 -> 4 に縮小) */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 text-[9px] font-bold tracking-[0.4em] text-orange-200/40 uppercase transition-colors hover:text-orange-100"
          >
            Close Menu
          </button>
        </div>
      </nav>
    </div>
  );
}
