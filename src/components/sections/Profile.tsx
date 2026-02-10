"use client";

import Image from "next/image"; // ★忘れず追加！

export default function Profile() {
  return (
    <section
      id="profile"
      className="flex h-screen w-full items-center p-4 md:justify-end md:pr-32"
    >
      <div className="animate-fade-in-up w-full max-w-3xl rounded-[2.5rem] border-[6px] border-white/60 bg-white/40 px-10 py-24 shadow-2xl backdrop-blur-md md:px-10">
        <h2 className="text-primary mb-6 text-center text-4xl font-black tracking-widest drop-shadow-sm">
          PROFILE
        </h2>

        <div className="space-y-4 text-center font-medium text-gray-800">
          <div className="flex flex-col items-center">
            <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src="./cat.png"
                alt="My Icon"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xl font-bold">見澤鼓太郎</p>
            <p className="text-sm text-gray-500">Student / Developer</p>
          </div>

          <div className="rounded-xl bg-white/50 p-4 text-left text-xl leading-relaxed">
            <p className="mb-2">
              INIAD (Toyo Univ) Student. <br />I love creating web applications
              and 3D graphics.
            </p>
            <p>
              <span className="text-primary font-bold">Likes:</span> Cats 🐈,
              Singing 🎤
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
