"use client";

import { useState } from "react";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { Icons } from "@/components/ui/icons";

// Propsの型定義（メニュー項目を受け取れるようにする）
type MobileMenuProps = {
  navItems: { label: string; href: string }[];
};

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRippling, setIsRippling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // 波紋エフェクトのトリガー
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 500); // アニメーション時間に合わせてリセット

    // メニューが開いたときにスクロールを無効化
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* --- ハンバーガーボタン --- */}
      <button
        className="fixed right-8 bottom-8 z-50 rounded-full bg-black p-3 text-white shadow-lg dark:bg-white dark:text-black"
        onClick={toggleMenu}
        aria-label="Menu Toggle"
      >
        {/* 波紋エフェクト */}
        {isRippling && (
          <span className="absolute inset-0 z-[-1] animate-ping rounded-full bg-gray-300 opacity-75 dark:bg-gray-600" />
        )}

        <div className="drop-shadow-[3px_3px_0px_#3b82f6]">
          {isOpen ? (
            <Icons.puzzlePiece
              size={30}
              className="rotate-180 animate-[spin_8s_linear_infinite] text-blue-300 duration-300 ease-in-out *:transition-transform"
            />
          ) : (
            <Icons.puzzlePiece
              size={30}
              className="animate-[spin_8s_linear_infinite_reverse] text-blue-300 duration-300 ease-in-out *:transition-transform"
            />
          )}
        </div>
      </button>

      {/* --- オーバーレイ（背景の暗幕） --- */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* --- スライドメニュー本体 --- */}
      <nav
        className={`fixed top-0 right-0 z-40 h-full w-2/3 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-black ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-8">
          {/* リンク一覧 */}
          <ul className="mt-12 flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-2 hover:text-gray-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ソーシャルリンクなど */}
          <div className="mb-20">
            <SocialLinks />
          </div>
        </div>
      </nav>
    </div>
  );
}
