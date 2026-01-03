import Image from "next/image";

type WorkProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function WorkCard({ title, description, imageUrl }: WorkProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      {/* next/image を使う */}
      <div className="relative mb-4 h-32 w-32">
        <Image
          src={imageUrl}
          alt={title}
          fill // 親要素に合わせて画像を埋める
          className="object-cover"
        />
      </div>
      <h2 className="mb-2 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
}
