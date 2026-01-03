"use client";

export default function ProfilePage() {
  return (
    <>
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Profile</h1>
        {/* 右にスキル 左にiconと文章 */}
        <div className="flex flex-row items-center gap-4"></div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-inside list-disc">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl font-semibold">About Me</div>
          <p className="max-w-md text-center">
            I am a passionate developer with experience in building web
            applications using modern technologies. I love learning new skills
            and improving my craft.
          </p>
        </div>
        {/* 詳しくはこちら */}
        <a href="/profile" className="text-blue-200 underline">
          詳しくはこちら
        </a>
      </div>
    </>
  );
}
