import Image from "next/image";
import Header from "@/public/images/assets/footer-title.png";
import Arrow from "@/public/images/assets/Arrow.png";
import Divider from "@/public/images/assets/divider.png";
export default function Footer() {
  return (
    <footer
      className="bg-[url('/images/backgrounds/footer.png')] bg-no-repeat bg-cover w-screen h-screen mt-12 
        flex items-center font-[family-name:var(--font-reddit-mono)]
        "
    >
      <div className="mx-24 mt-56 ">
        <Image src={Header} alt="Reach Out" className="h-48 w-auto" />
        <nav className="flex gap-3 items-center text-maincolour text-xl">
          <p>k392zhan@uwaterloo.ca</p>
          <Image src={Divider} alt="" className="h-8 w-auto" />
          <a
            href="https://www.linkedin.com/in/kathy-zhang-852933280/"
            className="flex items-center gap-2 underline"
            target="_blank"
          >
            LinkedIn <Image className="w-4" src={Arrow} alt="" />
          </a>
          <Image src={Divider} alt="" className="h-8 w-auto" />
          <a
            href="https://github.com/b27b"
            className="flex items-center gap-2 underline"
            target="_blank"
          >
            Github <Image className="w-4" src={Arrow} alt="" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
