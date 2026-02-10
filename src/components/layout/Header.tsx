"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const navItems = [
    { label: "Top", href: "hero" },
    { label: "Works", href: "works" },
    { label: "Profile", href: "profile" },
    { label: "Skills", href: "skills" },
    { label: "Contact", href: "contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);
    // DreiのScrollControlsが作っている、実際にスクロールしている箱
    const scrollContainer = document.querySelector(".hide-scrollbar");

    if (targetElement && scrollContainer) {
      // offsetTop（その要素が親の天辺から何ピクセルの位置にあるか）を取得
      const targetTop = targetElement.offsetTop;

      scrollContainer.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    } else {
      // デバッグ用：もし動かない場合はコンソールを見てください
      console.warn("Target or scrollContainer not found:", {
        id,
        targetElement,
        scrollContainer,
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent px-8 py-6">
      <a
        href="#hero"
        onClick={(e) => handleScroll(e, "hero")}
        className="cursor-pointer text-xl font-bold text-gray-700"
      >
        LOGO
      </a>

      <nav className="ml-auto hidden md:block">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className="cursor-pointer text-lg font-bold text-gray-600 transition-colors hover:text-cyan-400"
              >
                {item.label}
              </a>
            </li>
          ))}
          <div className="ml-4 border-l border-gray-300 pl-4">
            <SocialLinks />
          </div>
        </ul>
      </nav>

      <MobileMenu navItems={navItems} />
    </header>
  );
}
