import Head from "next/head";

import Video1 from "../../components/PageRegaloDesign/Video1/Video1";
import Faq from "../../components/PageRegaloDesign/FAQ/Faq";
import Choose from "../../components/PageRegaloDesign/Choose/Choose";
import CTA from "../../components/PageHome/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Stefano Montemarli - Lezione gratuita di Web Design",
  description:
    "Ottimizza il tuo sito web e impara a creare contenuti di qualità con la videolezione gratuita sul Web Design",
};

export default function RegaloDesign() {
  return (
    <>
      <head>
        <meta property="og:title" content="Stefano Montemarli" />
        <meta
          property="og:description"
          content="Ottimizza il tuo sito web e impara a creare contenuti di qualità con la videolezione gratuita sul Web Design. Guardala adesso!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://1drv.ms/i/s!AmWaVBl9p_dCgWiemacZx7YdEJm6?e=OpigS2"
        />
        <meta
          property="og:url"
          content="https://www.stefanomontemarli.it/regalo-design"
        />
        </head>

        <Video1 />
        <CTA href="https://cal.com/stefano87work/call-discovery"/>
        <Faq />
        <Choose />
        <CTA href="https://cal.com/stefano87work/call-discovery"/>
        <Footer />   
    </>
    )
}