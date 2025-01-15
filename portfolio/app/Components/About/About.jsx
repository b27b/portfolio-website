import Image from "next/image";
import Header from "@/public/images/assets/about-title.png";
import Button from "@/public/images/assets/button-back.png";
import Star1 from "@/public/images/assets/about-star1.png";
import Star2 from "@/public/images/assets/about-star2.png";



export default function About() {
  return (
    <section className="mx-24 font-[family-name:var(--font-reddit-mono)] grid grid-cols-2 gap-24">
      <div className="relative">
        <Image src={Header} className="z-30 h-40 w-auto mb-6" alt="About Me" />
        <section className="grid grid-flow-row gap-4 ">
          <h3 className="font-medium text-2xl">
            I’m Kathy, a Systems Design Engineering student at the University of
            Waterloo.
          </h3>
          <p>
            Something will be here and go into more detail about things. I think
            it will say more things also I think twitter. Something will be here
            and go into more detail about things. I think it will say more
            things also I think twitter{" "}
          </p>
          <a
            href="https://drive.google.com/file/d/1nWXps5Bt0V0rjk2kSD9ZC8ZGfVOMAEa8/view?usp=sharing"
            target="_blank"
            className="bg-[url('/images/assets/button-back.png')] bg-contain bg-no-repeat bg-center 
            w-fit px-12 py-6 
            text-lightcolour text-xl"
          >
            Resume
          </a>
        </section>
        <Image
          src={Star1}
          alt=""
          className="absolute w-36 -top-32 left-24 opacity-70"
        />
        <Image
          src={Star2}
          alt=""
          className="absolute w-44 -top-12 -right-40 opacity-70"
        />
      </div>
      <Image src={Button} alt="" className="m-auto" />
    </section>
  );
}
