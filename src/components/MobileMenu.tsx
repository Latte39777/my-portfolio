"use client";

import { useEffect, useState } from "react";
import SocialLinks from "@/components/SocialLinks";
import { Icons } from "@/components/ui/icons";

type MobileMenuProps = {
  navItems: { label: string; href: string }[];
};

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 500);
  };

  const forceClose = () => {
    setIsOpen(false);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    const scrollContainer = document.querySelector(".hide-scrollbar");

    if (targetElement && scrollContainer) {
      forceClose();

      scrollContainer.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="md:hidden">
      <button
        className="fixed right-8 bottom-8 z-50 rounded-full bg-black p-3 text-white shadow-lg dark:bg-white dark:text-black"
        onClick={toggleMenu}
        aria-label="Menu Toggle"
      >
        {isRippling && (
          <span className="absolute inset-0 z-[-1] animate-ping rounded-full bg-gray-300 opacity-75 dark:bg-gray-600" />
        )}

        <div className="drop-shadow-[3px_3px_0px_#3b82f6]">
          <Icons.puzzlePiece
            size={30}
            className={`${
              isOpen ? "rotate-180" : ""
            } animate-[spin_8s_linear_infinite] text-blue-300 duration-300 ease-in-out`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={forceClose}
      />

      {/* --- スライドメニュー本体 --- */}
      <nav
        className={`fixed top-0 right-0 z-40 h-full w-2/3 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-black ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-8">
          <ul className="mt-12 flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block py-2 font-bold text-gray-700 hover:text-cyan-400 dark:text-gray-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mb-20">
            <SocialLinks />
          </div>
        </div>
      </nav>
    </div>
  );
}
