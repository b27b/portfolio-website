import Image from "next/image"
import Background from "@/public/images/backgrounds/works-bck.png"

export default function Works(){
    return(
        <main className="absolute top-[55rem] w-screen -right-[7px]">
            <Image src={Background} className=""/> 
        </main>
    )
}