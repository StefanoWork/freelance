import style from "./Call.module.css";
import Image from "next/image";

import Bolla from "../../Images/Bolla.png";

export default function Call() {
  return (
    <div className={style.container}>
      <h1 className={`${style.confirmed} mulish`}>Prenotazione confermata</h1>
      <h2 className={`${style.subtitle} mulish`}>
        Riceverai un&apos;email all&apos;indirizzo indicato con tutti i dati
      </h2>

      <h3 className={`${style.regalo} barlow`}>
        Guarda questo breve video per prepararti alla tua call
      </h3>
      <iframe
        src="https://fast.wistia.com/embed/medias/lw5lhial8n"
        title="Video"
        className={style.video}
      ></iframe>

      <Image src={Bolla} alt="" className={style.bolla} />
      <Image src={Bolla} alt="" className={style.bolla2} />
      <div className={style.color1}></div>
    </div>
  );
}
