import Top from "@/components/sections/Top";
import Profile from "@/components/sections/Profile";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="">
        <div className=""></div>
        <Top />
        <Profile />
        <Works />
        <Contact />
      </main>
    </div>
  );
}
