"use client";

export default function Footer() {
  return (
    <>
      <footer className="mt-auto flex w-full items-center justify-between bg-white px-4 py-6 dark:bg-black">
        <ul className="flex gap-4">
          <li>
            <a
              className="twitter"
              href="https://twitter.com/Latte_iniad8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="github"
              href="https://github.com/Latte39777"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <div>@2025 Latte</div>
      </footer>
    </>
  );
}
