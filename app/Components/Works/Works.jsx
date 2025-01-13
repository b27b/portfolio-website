import Image from "next/image"
import Background from "@/public/images/backgrounds/works-bck.png"
import Header from "@/public/images/assets/works-title.png"

export default function Works(){
    return(
        <main className="absolute top-[55rem] w-screen -right-[7px]">
            <div className="relative">
            <Image src={Background} className="" alt=""/> 
            <Image src={Header} alt="My Works"/>
            </div>
        </main> 
    )
}