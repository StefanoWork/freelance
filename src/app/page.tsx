import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Method from "../components/Method/Method";
import Portfolio from "../components/Portfolio/Portfolio";
import Opinion from "../components/Opinion/Opinion";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contacts";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA/CTA";
import FollowMe from "../components/FollowMe/FollowMe";
import Call from "../components/Call-Float/Call";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stefano Montemarli - Web Designer & Social Media Manager",
  description:
    "Creo siti web professionali e gestisco la tua presenza sui social media per potenziare la tua visibilità online. Scopri come posso aiutarti a migliorare la tua presenza digitale e raggiungere i tuoi obiettivi!",
};

export default function Home() {
  return (
    <>
      <head>
        <meta property="og:title" content="Stefano Montemarli" />
        <meta
          property="og:description"
          content="Migliora la tua presenza online"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://1drv.ms/i/s!AmWaVBl9p_dCgWiemacZx7YdEJm6?e=OpigS2"
        />
        <meta property="og:url" content="https://www.stefanomontemarli.it" />
        <meta
          name="google-site-verification"
          content="0ijiX29zHbhM4fP7fjQ6Imgd3PbpjZ2Xir1rKPR6eZM"
        />
        <link rel="canonical" href="https://www.stefanomontemarli.it" />
      </head>
      <Navbar />
      <Call />
      <Hero />
      <About />
      <Services />
      <Method />
      <CTA />
      <Portfolio />
      <Opinion />
      {/* <Blog /> */}
      <Contact />
      <FollowMe />
      <Footer />
    </>
  );
}
