"use client";

import SocialLinks from "@/components/SocialLinks";
import MobileMenu from "@/components/MobileMenu";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
  loading: () => <div className="h-6 w-[72px]" />,
});

export default function Header() {
  return (
    <header className="pointer-events-auto fixed top-0 left-0 z-50 flex w-full items-center justify-end bg-transparent px-10 py-12">
      <nav className="hidden md:block">
        <div className="flex items-center gap-4 rounded-full border border-white/20 bg-[#5d4037]/90 px-8 py-3 shadow-2xl backdrop-blur-md">
          <SocialLinks />
          <div className="h-4 w-[1px] bg-white/20" />
          <ThemeToggle />
          <div className="h-4 w-[1px] bg-white/20" />
          <a
            href="mailto:latte.works.4649@gmail.com"
            className="rounded-full bg-white px-5 py-2 text-[10px] font-black tracking-[0.2em] text-[#5d4037] uppercase transition-all hover:bg-[#22d3ee] hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
