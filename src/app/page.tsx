import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Top from "@/app/top/page";
import Profile from "@/app/profile/page";
import Works from "@/app/works/page";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    // 全体のラッパー
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-24 px-6 py-12 sm:gap-32 sm:py-24">
        <section id="top" className="w-full">
          <Top />
        </section>
        <section id="profile" className="w-full">
          <Profile />
        </section>
        <section id="works" className="w-full">
          <Works />
        </section>
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
