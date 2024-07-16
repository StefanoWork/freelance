import style from "./Opinion.module.css";
import Image from "next/image";

import SingleReview from "../SingleReview/SingleReview";
import Bolla from "../../../Images/Bolla.png";
import Puntini from "../../../Images/Puntini.png";
import Recensione1 from "../../../Images/Recensioni/MatteoMangili.webp";

export default function Opinion() {
  return (
    <div className={style.container} id="Review">
      <h2 className={`${style.title} mulish`}>Recensioni</h2>

      <SingleReview
        Testo="Lavorare con Stefano è stato molto utile perché mi ha permesso di risparmiare molto tempo, utile per la mia attività, oltre che a consentirmi 
          di trovare molti clienti grazie alla sua proattività nella creazione di contenuti per i social."
        Professionalità="8"
        Efficienza="9"
        Creatività="10"
        Video="https://fast.wistia.com/embed/medias/bo105dmf4o"
        Nome="Matteo Mangili"
        Logo={Recensione1}
      />

      <Image className={style.bolla} src={Bolla} alt="" />
      <Image className={style.puntini} src={Puntini} alt="" />
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
