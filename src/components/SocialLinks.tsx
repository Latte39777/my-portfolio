"use client";

import { Icons } from "@/components/ui/icons";

const SOCIAL_ITEMS = [
  {
    name: "GitHub",
    href: "https://github.com/Latte39777",
    Icon: Icons.github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Latte_iniad8",
    Icon: Icons.twitter,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCpkkMTjHvE0KDgU0lZn5EXQ",
    Icon: Icons.youtube,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex gap-4">
      {SOCIAL_ITEMS.map((item) => {
        const IconComponent = item.Icon;
        return (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.name}へ移動`}
              className="block text-white transition-all duration-300 hover:scale-110 hover:text-gray-200"
            >
              <IconComponent size={30} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
