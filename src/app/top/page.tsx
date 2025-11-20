import Image from "next/image";

export default function Top() {
  return (
    <>
      <section className="w-full">
        <h1 className="mb-4 text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg">
          This is the top section of my portfolio website.
        </p>
        <Image
          src="/vercel.svg"
          alt="vercel icon"
          width={100}
          height={100}
          className="mt-4"
        />
      </section>
    </>
  );
}
