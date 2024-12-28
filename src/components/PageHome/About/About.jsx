import Image from "next/image";

import style from "./About.module.css";
import Arrow from "../../../Images/ArrowB.png";

export default function About() {
  return (
    <div className={style.container} id="About">
      <iframe
        className={style.video}
        src="https://fast.wistia.net/embed/iframe/kgtziu5tu5?seo=false&videoFoam=true"
        title="YouTube video player"
      ></iframe>

      <p className={`${style.message} caveat`}>MESSAGGIO PER TE</p>
      <Image className={style.freccia} src={Arrow} alt="" />

      <div className={style.color3}></div>
      <div className={style.color4}></div>
      
    </div>
  );
}
