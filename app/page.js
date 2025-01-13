import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import Works from "./Components/Works/Works";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

export default function Home() {
  return (
 <div>
  <Navbar/>
  <Hero/>
  <Works/>
  <About/>
 </div>
  );
}
