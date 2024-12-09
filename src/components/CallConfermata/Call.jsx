import style from "./Call.module.css";
import Image from "next/image";

import Bolla from "../../Images/Bolla.png";
import Arrow from "../../Images/ArrowC.png";
import Regalo from "../../Images/ArrowR.png";

export default function Call() {
  return (
    <div className={style.container}>
      <h1 className={`${style.confirmed} mulish`}>Prenotazione confermata</h1>
      <h2 className={`${style.subtitle} mulish`}>
        Riceverai un&apos;email all&apos;indirizzo indicato con tutti i dati
      </h2>

      <h3 className={`${style.regalo} barlow ${style.fadeColor}`}>
        Durante la call riceverai dei consigli gratuiti del tuo sito web o 
        del tuo profilo social per migliorare 
        subito la tua presenza online. 
      </h3>
      <iframe
        src="https://fast.wistia.com/embed/medias/lw5lhial8n"
        title="Video"
        className={style.video}
      ></iframe>

      <Image src={Arrow} alt="Freccia" className={style.freccia} />
      {/* <Image src={Regalo} alt="Freccia" className={style.freccia2} /> */}
      

      <Image src={Bolla} alt="" className={style.bolla} />
      <Image src={Bolla} alt="" className={style.bolla2} />
      <div className={style.color1}></div>
    </div>
  );
}
