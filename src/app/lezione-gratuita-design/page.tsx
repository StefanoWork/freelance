import Head from "next/head";

import Footer from "../../components/Footer/Footer";
import HeroFreeDesign from "../../components/FreeDesign/Hero/Hero";
import Method from "../../components/FreeDesign/Method/Method";
import Contact from "../../components/FreeDesign/Contact/Contacts";
import Video from "../../components/FreeDesign/Video/video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stefano Montemarli - Web Designer & Social Media Manager",
  description:
    "Realizzo siti web professionali e gestisco la tua presenza sui social media. Scorpi come posso migliorare la tua presenza online!",
};

export default function FreeDesign() {
  return (
    <>
      <head>
        <meta property="og:title" content="Stefano Montemarli" />
        <meta
          property="og:description"
          content="Ottimizza il tuo sito web e impara a creare contenuti di qualità con la videolezione gratuita sul Web Design. Scaricala subito!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://1drv.ms/i/s!AmWaVBl9p_dCgWiemacZx7YdEJm6?e=OpigS2"
        />
        <meta
          property="og:url"
          content="https://www.stefanomontemarli.it/lezione-gratuita-design"
        />

        <script
          async
          src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127"
          type="text/javascript"
        ></script>
        <script>
          {`fetch(
            "https://assets.mailerlite.com/jsonp/644337/forms/113099232009783174/takel"
          )`}
        </script>

        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '165915656582367'); 
            fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=165915656582367&ev=PageView
            &noscript=1"
            />`,
          }}
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js"
        ></script>
      </head>
      <HeroFreeDesign />
      <Video />
      <Method />
      <Contact />
      <Footer />
    </>
  );
}
