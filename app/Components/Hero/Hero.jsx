import Image from "next/image";
import Character from "@/public/images/assets/character.png";
import HeroTxtBck from "@/public/images/backgrounds/hero-text-bck.png";
import HeroStar from "@/public/images/assets/hero-star.png";
import Felt from "@/public/images/backgrounds/felt-texture.png";
import Star1 from "@/public/images/assets/star1.png";
import Star2 from "@/public/images/assets/star2.png";
import Exclaim from "@/public/images/assets/exclaim.png";

export default function Hero() {
  return (
    <main className="font-[family-name:var(--font-reddit-mono)]">
      <div className="relative flex justify-center my-52">
        <Image src={Felt} alt="" className="absolute z-50 -top-96 w-full" />
        <div className="absolute z-10 w-4/12">
          <Image src={Character} alt="character" className="relative" />
          <Image
            src={Exclaim}
            alt=""
            className="absolute -left-24 -top-24 w-5/12"
          />
        </div>
        <section className="absolute z-20 mt-96">
          <div className="relative flex justify-center items-center">
            <p className="text-lightcolour w-1120 px-12 absolute text-xl pb-5 text-center">
              Im Kathy! A Systems Design Engineering Student at the{" "}
              <b>University of Waterloo</b>. I’m a <b>designer</b> and{" "}
              <b>web developer</b> looking to create unique and fun design
              solutions.
            </p>
            <Image src={HeroTxtBck} alt="" className="w-1120 mx-12" />
          </div>
        </section>
        <Image
          src={HeroStar}
          alt=""
          className="absolute z-0 right-36 -top-48 w-4/12"
        />
        <Image
          src={Star1}
          alt=""
          className="absolute z-0 right-32 top-64 w-52"
        />
        <Image src={Star2} alt="" className="absolute z-0 left-36" />
      </div>
    </main>
  );
}
