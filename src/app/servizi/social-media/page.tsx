import Head from "next/head";

import Navbar from "../../../components/Navbar/Navbar";
import HeroSocial from "../../../components/HeroSocial/HeroSocial";
import ServiceFor from "../../../components/ServiceFor/ServiceFor";
import Strategy from "../../../components/Strategy/Strategy";
import Contact from "../../../components/Contact/Contacts";
import Footer from "../../../components/Footer/Footer";

import check from "../../../Images/check.png";
import LaptopSocial from "../../../Images/LaptopSocial.png";

import Smart1 from "../../../Images/Smart1.png";
import Smart2 from "../../../Images/Smart2.png";
import Smart3 from "../../../Images/Smart3.png";
import Smart4 from "../../../Images/Smart4.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stefano Montemarli - Esperto Social Media Manager",
  description:
    "Esperto Social Media Manager: Potenzia la tua presenza online con strategie di Social Media Marketing efficaci e personalizzate. Aumenta visibilità, engagement e conversioni!",
};

export default function SocialMediaPage() {
  return (
    <>
      <head>
        <link
          rel="canonical"
          href="https://www.stefanomontemarli.it/servizi/social-media"
        />

        <meta property="og:title" content="Stefano Montemarli" />
        <meta
          property="og:description"
          content="Migliora la tua presenza online con il Social Media Marketing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://1drv.ms/i/s!AmWaVBl9p_dCgWiemacZx7YdEJm6?e=OpigS2"
        />
        <meta
          property="og:url"
          content="https://www.stefanomontemarli.it/servizi/social-media"
        />
      </head>
      <Navbar />
      <HeroSocial />
      <ServiceFor
        image={LaptopSocial}
        secondaDescrizione={`Oltre a essere un mezzo per comunicare con il tuo pubblico, 
        i social media sono un potente strumento strategico per far crescere la tua presenza online 
        e raggiungere i tuoi obiettivi di business.<br/><br/>
        Immaginali come i canali attraverso cui puoi connetterti
         direttamente con il tuo pubblico di riferimento, condividere la tua 
         storia e promuovere i tuoi prodotti e servizi. <br/><br/>
        Ecco come possono aiutarti:`}
        icona1={check}
        titolo1="Aumentare la riconoscibilità e visibilità online"
        titolo2="Espandere la tua base di follower"
        titolo3="Migliorare la visibilità del tuo brand"
        titolo4="Generare leads qualificati"
        titolo5="Aumentare l'engagement con il tuo pubblico"
      />
      <Strategy
        mItems={[
          {
            href: "#Ricerca",
            number: "01.",
            description: "Ricerca di mercato",
          },
          { href: "#Design", number: "02.", description: "Brand Identity" },
          { href: "#Sviluppo", number: "03.", description: "Contenuti" },
          {
            href: "#Lancio",
            number: "04.",
            description: "Analisi",
          },
        ]}
        image1={Smart1}
        image2={Smart2}
        image3={Smart3}
        image4={Smart4}
        descrizione1={`Condurrò un’analisi approfondita dei tuoi competitor nel mondo dei social media. Esaminerò le loro strategie, i contenuti che pubblicano e il coinvolgimento con il pubblico.
                      <br/><br/>Inoltre identificherò le opportunità e le tendenze nel tuo settore. <br/>Questo ci aiuterà a sviluppare una <span style="color: #2176ff">strategia personalizzata</span>.`}
        descrizione2={`Creerò uno <span style="color: #2176ff">stile visivo unico</span> per il tuo brand. Definiremo una palette di colori e una tipografia coerente.
                      <br/><br/>Il tuo brand dovrà emergere rispetto ai competitor. <br>Lavoreremo su elementi distintivi che catturino l’attenzione.
                      `}
        descrizione3={`La scrittura dei testi è un elemento cruciale per coinvolgere il pubblico. Creerò testi e descrizioni che <span style="color: #2176ff">catturino l’attenzione</span>, utilizzando un tono adatto al tuo brand. <br/>Ogni post avrà uno <span style="color: #2176ff">scopo specifico</span>, che potrebbe essere informare, intrattenere o spingere all’azione.
                      <br/><br/>Anche la progettazione di immagini coinvolgenti è altrettanto importante. <br/>Creerò <span style="color: #2176ff">grafiche accattivanti</span> per accompagnare i tuoi contenuti. Queste immagini rifletteranno la tua brand identity e attrarranno l’occhio degli utenti.
                      `}
        descrizione4={`Valuterò regolarmente le metriche. <br/><br/>Analizzerò <span style="color: #2176ff">l’engagement</span> (quante persone interagiscono con i tuoi contenuti), <span style="color: #2176ff">il reach</span> (quante persone vedono i tuoi post) e le <span style="color: #2176ff">conversioni</span> (azioni che gli utenti compiono a seguito dei tuoi contenuti). <br/><br/>Questi dati mi aiuteranno a prendere decisioni informate.
                      L’obiettivo è ottimizzare costantemente la tua presenza sui social per ottenere i <span style="color: #2176ff">migliori risultati possibili</span>.`}
        currentPage={undefined}
      />

      <Contact />
      <Footer />
    </>
  );
}
