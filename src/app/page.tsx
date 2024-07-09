import Image from "next/image";
import Link from "next/link";

import Navabar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Method from "../components/Method/Method";
import Portfolio from "../components/Portfolio/Portfolio";
import Opinion from "../components/Opinion/Opinion";
import Contact from "../components/Contact/Contacts";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navabar />
      <Hero />
      <About />
      <Services />
      <Method />
      <Portfolio />
      <Opinion />
      <Contact />
      <Footer />
    </>
  );
}
