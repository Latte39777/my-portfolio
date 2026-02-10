import { Icons } from "@/components/ui/icons";

const SOCIAL_ITEMS = [
  {
    name: "GitHub",
    href: "https://github.com/Latte39777",
    icon: <Icons.github size={30} />,
    color: "",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Latte_iniad8",
    icon: <Icons.twitter size={30} />,
    color: "",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCpkkMTjHvE0KDgU0lZn5EXQ",
    icon: <Icons.youtube size={30} />,
    color: "",
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {SOCIAL_ITEMS.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name}へ移動`}
            className={`${item.color}`}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
