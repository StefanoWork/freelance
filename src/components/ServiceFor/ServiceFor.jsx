import style from "./ServiceFor.module.css";
import Image from "next/image";

import React from "react";
import parse from "html-react-parser";

import XRed from "../../Images/XEmptyRed.png";
import Bolla from "../../Images/Bolla.png";
import PuntiniBlu from "../../Images/PuntiniBlu.png";

export default function ServiceFor({
  secondaDescrizione,
  titolo1,
  titolo2,
  titolo3,
  titolo4,
  titolo5,
  icona1,
  image,
}) {
  return (
    <div className={style.container} id="ServiceFor">
      <h2 className={style.title}>Perché è utile</h2>

      <div className={style.content}>
        <div className={style.grid}>
          <Image src={image} alt="Laptop" className={style.Laptop} />
        </div>

        <div className={style.Dx}>
          <p className={style.MainDescription}>{parse(secondaDescrizione)}</p>
          <div className={style.point}>
            <Image className={style.icona} src={icona1} alt=""></Image>
            <p className={style.secondDescription}>{titolo1}</p>
          </div>
          <div className={style.point}>
            <Image className={style.icona} src={icona1} alt=""></Image>
            <p className={style.secondDescription}>{titolo2}</p>
          </div>
          <div className={style.point}>
            <Image className={style.icona} src={icona1} alt=""></Image>
            <p className={style.secondDescription}>{titolo3}</p>
          </div>
          <div className={style.point}>
            <Image className={style.icona} src={icona1} alt=""></Image>
            <p className={style.secondDescription}>{titolo4}</p>
          </div>
          <div className={style.point}>
            <Image className={style.icona} src={icona1} alt=""></Image>
            <p className={style.secondDescription}>{titolo5}</p>
          </div>
        </div>
      </div>

      <Image src={XRed} alt="" className={style.XRed} />
      <Image src={Bolla} alt="" className={style.Bolla} />
      <Image src={PuntiniBlu} alt="" className={style.PuntiniBlu} />

      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
