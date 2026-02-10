"use client";

// カテゴリ別にスキルを定義
const codingSkills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 70 },
  { name: "React / Next.js", level: 75 },
];

const creatorSkills = [
  { name: "Blender", level: 65 },
  { name: "DaVinci Resolve", level: 60 },
  { name: "Three.js / R3F", level: 55 }, // CodeでもありCreativeでもあるのでこちらに入れました（移動自由です）
];

export default function Skills() {
  return (
    <section
      id="skills"
      // md:justify-start md:pl-32 → PCで見るときは左寄せ＋左に余白
      className="flex h-screen w-full items-center justify-center p-4 md:justify-start md:pl-32"
    >
      {/* max-w-2xl → カードの幅を大きくしました */}
      <div className="animate-fade-in-up w-full max-w-2xl rounded-[2.5rem] border-[6px] border-white/60 bg-white/40 p-8 shadow-2xl backdrop-blur-md md:p-12">
        <h2 className="mb-8 text-center text-4xl font-black tracking-widest text-cyan-400 drop-shadow-sm">
          SKILLS
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* 左側カラム：Coding */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
              <span className="text-blue-500">💻</span> Coding
            </h3>
            <div className="flex flex-col gap-4">
              {codingSkills.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="mb-1 flex justify-between px-1 text-sm font-bold text-gray-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-white/50 shadow-inner">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右側カラム：Creator */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
              <span className="text-purple-500">🎨</span> Creator
            </h3>
            <div className="flex flex-col gap-4">
              {creatorSkills.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="mb-1 flex justify-between px-1 text-sm font-bold text-gray-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-white/50 shadow-inner">
                    {/* クリエイター側は色を変えてみました（紫系） */}
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs font-bold text-gray-500">
          Also learning: AWS, Docker, Unity, Unreal Engine
        </div>
      </div>
    </section>
  );
}
