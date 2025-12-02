import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Top from "@/components/sections/Top";
import Profile from "@/components/sections/Profile";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    // 全体のラッパー
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Header />
      <main className="">
        <Top />
        <Profile />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
