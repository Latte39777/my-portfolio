"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const navItems = [
    { label: "Top", href: "/" },
    { label: "Profile", href: "/profile" },
    { label: "Works", href: "/works" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-5 z-100 flex w-full items-center justify-between bg-transparent px-4 py-4">
      <Link href="/" className="text-xl font-bold text-gray-700">
        LOGO
      </Link>

      {/* --- PC menu --- */}
      <nav className="ml-auto hidden md:block">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="transition-colors hover:text-gray-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <SocialLinks />
        </ul>
      </nav>

      {/* --- Mobile menu --- */}
      <MobileMenu navItems={navItems} />
    </header>
  );
}
