import WorkCard from "@/components/WorkCard";
import { worksData } from "@/app/_data/works";

export default function Works() {
  return (
    <section id="works" className="min-h-screen w-full bg-yellow-500 py-16">
      <div className="container mx-auto flex flex-col items-center gap-10 px-4">
        {/* タイトルエリア */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Works</h1>
          <p className="mt-4 text-white">これまでの制作物一覧</p>
        </div>

        {/* グリッドエリア */}
        <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3">
          {worksData.map((work) => (
            <WorkCard
              key={work.id}
              title={work.title}
              description={work.description}
              imageUrl={work.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
