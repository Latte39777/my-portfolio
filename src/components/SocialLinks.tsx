import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

// href="https://twitter.com/Latte_iniad8"
// href="https://github.com/Latte39777"

const SOCIAL_ITEMS = [
  {
    name: "GitHub",
    href: "https://github.com/Latte39777",
    icon: <FaSquareGithub size={30} />,
    color: "",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Latte_iniad8",
    icon: <FaSquareXTwitter size={30} />,
    color: "",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/examplechannel",
    icon: <FaSquareYoutube size={30} />,
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
