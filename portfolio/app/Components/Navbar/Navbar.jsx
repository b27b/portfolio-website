"use client"
import { useRef } from "react";
import Image from "next/image";
import Icon from "@/public/images/assets/icon.png"

export default function Navbar() {

    const Projects = useRef(null);
  
    const ScrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    };
  
  return (
    <section className="flex justify-center">
      <nav
        className="font-[family-name:var(--font-reddit-mono)]) text-lightcolour 
      bg-[url('/images/backgrounds/nav.png')] bg-contain bg-no-repeat bg-center 
      flex justify-between items-center 
      w-11/12
      pt-12 pb-14 px-12
      rounded-3xl 
      fixed z-50 top-1
      shadow-[0_20px_5px_-15px_rgba(0,0,0,0)]
      text-lg
      "
      >
        <a href="/" className="">
          <Image src={Icon} alt="home" className="w-16 opacity-[95%]"/>
        </a>
        <div className="flex justify-between items-center gap-4 opacity-[80]">
          {/* <a className="" onClick={() => ScrollToSection(works)}>works</a>
          <a onClick={() => ScrollToSection(about)}>about</a> */}
          {/* <a href="https://drive.google.com/file/d/1nWXps5Bt0V0rjk2kSD9ZC8ZGfVOMAEa8/view?usp=sharing" target="_blank">resume</a> */}
        </div>
      </nav>
    </section>
  );
}
