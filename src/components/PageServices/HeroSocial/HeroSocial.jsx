import Image from "next/image";

import style from "./HeroSocial.module.css";
import Bolla from "../../../Images/Bolla.png";
import Phone1 from "../../../Images/Phone1.png";
import Phone2 from "../../../Images/Phone1.png";

export default function HeroSocial() {
  return (
    <div className={style.heroDiv} id="Home">
      <div className={style.heroSx}>
        <div className={style.myWork}>Social Media Manager</div>
        <div className={` ${style.myName} mulish`}>
          Esperienza social al tuo servizio
        </div>
        <div className={style.heroDown}>
          <div className={style.line}></div>
          <p className={style.myDescription}>
            Gestisco i tuoi canali social con creatività e competenza per
            raggiungere i tuoi obiettivi
          </p>
        </div>
      </div>
      <div className={style.heroDx}>
        <Image src={Bolla} alt="" className={style.bolla1} />
        <Image src={Bolla} alt="" className={style.bolla2} />
        <Image src={Bolla} alt="" className={style.bolla3} />
        <Image src={Bolla} alt="" className={style.bolla4} />
        <Image src={Bolla} alt="" className={style.bolla5} />
        <Image src={Phone1} alt="Smartphone" className={style.serviceImage1} />
        <Image src={Phone2} alt="Smartphone" className={style.serviceImage2} />

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </div>
  );
}
