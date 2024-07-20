import style from "./Hero.module.css";
import Image from "next/image";

import Bolla from "../../../Images/Bolla.png";
import Mockup from "../../../Images/Mockup.webp";

export default function HeroFree() {
  return (
    <div className={style.container} id="Home">
      <div className={style.heroSx}>
        <div className={` ${style.myWork} mulish`}>
          Sei un Coach o un consulente?
        </div>
        <div className={` ${style.myName} mulish`}>
          Scarica la <span className={style.bold}>videolezione gratuita </span>
           per coach e consulenti
        </div>
        <div className={style.heroDown}>
          <div className={style.line}></div>
          <p className={` ${style.myDescription} mulish`}>
            Scopri i segreti del Web Design per creare un sito web coinvolgente
            e strategico, specificamente pensato per coach e consulenti.
          </p>
        </div>
      </div>
      <div className={style.heroDx}>
        <Image src={Bolla} alt="" className={style.bolla1} />
        <Image src={Bolla} alt="" className={style.bolla2} />
        <Image src={Bolla} alt="" className={style.bolla3} />
        <Image src={Bolla} alt="" className={style.bolla4} />
        <Image src={Bolla} alt="" className={style.bolla5} />
        <Image
          src={Mockup}
          alt="Copertina"
          className={style.mockup}
        />

        <a href="#Contacts" className={`${style.download} barlow`}>
          Scarica ora
        </a>

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </div>
  );
}
