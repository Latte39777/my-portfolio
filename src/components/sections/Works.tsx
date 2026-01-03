"use client";

import { worksData } from "@/app/_data/works";
import WorkCard from "../WorkCard";

export default function Works() {
  const featuredWorks = worksData.filter((work) => work.isFeatured);

  return (
    <>
      <section id="works" className="h-screen w-full bg-yellow-500">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Works</h1>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {featuredWorks.map((work) => (
              <div
                key={work.id}
                className="flex flex-col items-center rounded bg-white p-4"
              >
                <WorkCard
                  key={work.id}
                  title={work.title}
                  description={work.description}
                  imageUrl={work.imageUrl}
                />
                <h2 className="mb-2 text-xl font-semibold">{work.title}</h2>
                <p className="text-center">{work.description}</p>
              </div>
            ))}
          </div>
          {/* 詳しくはこちら */}
          <a
            href="/works"
            className="mt-4 rounded bg-black px-4 py-2 text-white"
          >
            詳しくはこちら
          </a>
        </div>
      </section>
    </>
  );
}
