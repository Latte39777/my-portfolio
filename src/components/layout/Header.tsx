"use client";

import { useState } from "react";
import SocialLinks from "@/components/SocialLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // メニューの開閉を切り替える
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="mb-8 flex w-full items-center justify-between bg-white px-4 py-4 dark:bg-black">
        <a href="#top" className="fixed">
          LOGO
        </a>

        {/* PC menu */}
        <nav className="nav-class ml-auto hidden md:block">
          {/* 右に配置 */}
          <ul className="flex gap-4">
            <li>
              <a href="#top">Top</a>
            </li>
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <SocialLinks />
          </ul>
        </nav>

        {/* smart phone menu */}
        {/* 背景クリックでメニューを閉じる */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 z-30 h-full w-full md:hidden"
            onClick={closeMenu}
          ></div>
        )}
        <nav className="nav-class ml-auto flex md:hidden">
          <button
            // className="fixed right-8 bottom-8 z-50"
            className="fixed right-8 bottom-8 z-50"
            onClick={toggleMenu}
            aria-label="Menu Toggle"
          >
            {isOpen
              ? // ✕ (Close) アイコン
                "close"
              : // ≡ (Hamburger) アイコン
                "hamburger menu"}
          </button>

          {/* 右下にlink */}
          <div
            className={`fixed top-0 right-0 z-40 flex h-full w-1/3 flex-col justify-end p-8 pb-24 duration-300 ease-in-out dark:bg-black ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={closeMenu}
          >
            {/* ここで縦並び (flex-col) を指定 */}
            <ul className="flex flex-col items-center gap-8">
              <li>
                <a href="#top">Top</a>
              </li>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <SocialLinks />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
