import Image from "next/image";
import Star from "@/public/images/assets/star1.png";

export default function Card({ title, descrip, tools, project }) {
  return (
    <a
      href="/"
      className="bg-[url('/images/backgrounds/felt-texture2.png')] px-12 py-6 rounded-lg 
    flex flex-col gap-4
    font-[family-name:var(--font-reddit-mono)]"
    >
      <Image src={Star} alt="" className="h-72 w-auto" />
      <div className="flex flex-col gap-3 h-32">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="">{descrip}</p>
      </div>
      <ul className="flex gap-4">
        {tools.map((skill, index) => (
          <li
            key={index}
            className="bg-maincolour text-lightcolour px-4 py-2 rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </a>
  );
}
