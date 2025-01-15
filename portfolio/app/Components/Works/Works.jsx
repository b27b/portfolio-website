import Image from "next/image"
import Background from "@/public/images/backgrounds/works-bck.png"
import Header from "@/public/images/assets/works-title.png"
import Card from "./Card"
import StarDark1 from "@/public/images/assets/star1-dark.png"
import StarDark2 from "@/public/images/assets/star2-dark.png"

export default function Works(){
    return(
        <main className=" bg-[url('/images/backgrounds/works-bck.png')] bg-contain bg-no-repeat my-12 h-[110vw]">
            <div className="grid grid-flow-row grid-row-2 justify-center gap-24">
            <Image src={Header} alt="My Works" className="mt-96 mx-auto z-30 h-48 w-auto "/>
            {/* <Image src={StarDark1} alt="" className="absolute right-60 -bottom-[35rem]"/>
            <Image src={StarDark2} alt="" className="absolute -bottom-[85rem] left-[40rem] z-50 w-32"/> */}
            <section className="grid grid-flow-col grid-cols-3 gap-6 mx-24"> 
            <Card title="Waterloo Reality Labs Website" descrip="some placeholder text here for the time being" tools={["NextJS", "Tailwind CSS"]} project="www.google.ca"/>
            <Card title="UI/UX Case Study: TikTok" descrip="some placeholder text here for the time being" tools={["Figma"]}/>
            <Card title="Design Assets" descrip="some placeholder text here for the time being" tools={["Figma", "Procreate"]}/>
            </section>
             
            </div>
        </main> 
    )
}