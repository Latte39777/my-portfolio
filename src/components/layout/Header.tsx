"use client";

import SocialLinks from "@/components/SocialLinks";
import MobileMenu from "@/components/MobileMenu";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className="pointer-events-auto fixed top-0 left-0 z-50 flex w-full items-center justify-end bg-transparent px-10 py-8">
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          <div className="flex items-center gap-6 border-l border-white/20 pl-8">
            <SocialLinks />
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] font-black tracking-[0.2em] text-orange-100 uppercase shadow-xl backdrop-blur-md transition-all hover:border-orange-100 hover:bg-orange-100 hover:text-[#5d4037]"
            >
              Contact
            </a>
          </div>
        </ul>
      </nav>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
