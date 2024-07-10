import style from "./HeroWeb.module.css";
import Image from "next/image";

import Bolla from "../../../Images/Bolla.png";
import Laptop1 from "../../../Images/PC1.png";
import Laptop2 from "../../../Images/PC2.png";

export default function HeroWeb() {
  return (
    <div className={style.heroDiv} id="Home">
      <div className={style.heroSx}>
        <div className={style.myWork}>Web Design</div>
        <div className={style.myName}>Esperienza Web al tuo servizio</div>
        <div className={style.heroDown}>
          <div className={style.line}></div>
          <p className={style.myDescription}>
            Trasformo idee in siti Web coinvolgenti e strategici, creando
            esperienze digitali su misura.
          </p>
        </div>
      </div>
      <div className={style.heroDx}>
        <Image src={Bolla} alt="" className={style.bolla1} />
        <Image src={Bolla} alt="" className={style.bolla2} />
        <Image src={Bolla} alt="" className={style.bolla3} />
        <Image src={Bolla} alt="" className={style.bolla4} />
        <Image src={Bolla} alt="" className={style.bolla5} />
        <Image src={Laptop1} alt="" className={style.serviceImage1} />
        <Image src={Laptop2} alt="" className={style.serviceImage2} />

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </div>
  );
}
