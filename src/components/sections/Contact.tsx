"use client";

export default function Contact() {
  return (
    <>
      <section id="contact" className="h-screen w-full bg-blue-500">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact</h1>
          <div>お問い合わせはこちらからお願いします。</div>
          <a href="/contact">こちら</a>
        </div>
      </section>
    </>
  );
}
