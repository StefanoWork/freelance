import Image from "next/image";

import style from "./About.module.css";
import Programming from "../../Images/About.png";
import Freccia from "../../Images/FrecciaArancione.png";
import Puntini from "../../Images/Puntini.png";

export default function About() {
  return (
    <div className={style.container} id="About">
      <div className={style.diviso}>
        <div className={style.divSx}>
          <Image
            className={style.mainImage}
            src={Programming}
            alt="Programmare al pc"
          />

          <div className={style.color1}></div>
          <div className={style.color2}></div>
        </div>

        <div className={style.divDx}>
          <h2 className={style.title}>Chi sono</h2>
          <p className={style.DescriptionDesktop}>
            Ciao, sono Stefano. La mia passione è comunicare e creare con il
            computer.
            <br />
            <br /> Mi occupo di creare siti web professionali e ottimizzati, e
            di gestire le strategie di social media marketing per far crescere
            il tuo business. Ti risparmio tempo e ti offro supporto e assistenza
            continua. <br />
            <br />
            Se vuoi saperne di più, visita le pagine dedicate sul mio sito web o
            scrivimi per una consulenza gratuita. Ti offrirò soluzioni
            personalizzate per i tuoi obiettivi.
          </p>

          <Image className={style.freccia} src={Freccia} alt="" />
          <Image className={style.puntini} src={Puntini} alt="" />

          <div className={style.color3}></div>
          <div className={style.color4}></div>
        </div>
      </div>

      <p className={style.Description}>
        Ciao, sono Stefano. La mia passione è comunicare e creare con il
        computer.
        <br />
        <br /> Mi occupo di creare siti web professionali e ottimizzati, e di
        gestire le strategie di social media marketing per far crescere il tuo
        business. Ti risparmio tempo e ti offro supporto e assistenza continua.{" "}
        <br />
        <br />
        Se vuoi saperne di più, visita le pagine dedicate sul mio sito web o
        scrivimi per una consulenza gratuita. Ti offrirò soluzioni
        personalizzate per i tuoi obiettivi.
      </p>
    </div>
  );
}
