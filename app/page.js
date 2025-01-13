import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import Works from "./Components/Works/Works";
import Navbar from "./Components/Navbar/Navbar";

export default function Home() {
  return (
 <div>
  <Navbar/>
  <Hero/>
  <Works/>
 </div>
  );
}
