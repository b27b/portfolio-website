import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import Works from "./Components/Works/Works";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
 <div>
  <Navbar/>
  <Hero/>
  <Works/>
  <About/>
  <Footer/>
 </div>
  );
}
