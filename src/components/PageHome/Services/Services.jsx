"use client";

import Image from "next/image";
import Link from "next/link";

import style from "./Services.module.css";
import Freccia from "../../../Images/FrecciaLunga.png";
import Puntini from "../../../Images/PuntiniBlu.png";
import Phone from "../../../Images/Phone.png";
import Phone1 from "../../../Images/Phone1.png";
import PC1 from "../../../Images/PC1.png";
import PC2 from "../../../Images/PC2.png";

import { useRef, useEffect, useState } from "react";

export default function Services() {
  const titleRef1 = useRef(null);
  const underlineRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const underlineRef2 = useRef(null);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  useEffect(() => {
    if (titleRef1.current && underlineRef1.current) {
      underlineRef1.current.style.width = `${titleRef1.current.offsetWidth}px`;
    }
    if (titleRef2.current && underlineRef2.current) {
      underlineRef2.current.style.width = `${titleRef2.current.offsetWidth}px`;
    }
  }, []);

  return (
    <div className={style.container} id="Services">
      <h2 className={` ${style.title} mulish`}>I miei servizi</h2>
      <Image src={Freccia} className={style.freccia} alt="" />

      <div className={style.divService}>
        <Link
          href="/servizi/web-design"
          className={style.imgService}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <Image className={style.pc1} src={PC1} alt="Laptop" />
          <Image className={style.pc2} src={PC2} alt="Laptop" />
        </Link>

        <div className={style.textService1}>
          <h3 ref={titleRef1} className={`${style.serviceTitle1} barlow`}>
            Web Design
          </h3>
          <div
            ref={underlineRef1}
            className={`${style.underline} ${isHovered1 ? style.show : ""}`}
          ></div>
          <p className={`${style.description1} barlow`}>
            Realizzo siti web professionali e ottimizzati per garantire la massima visibilità 
            online. Ogni progetto è studiato su misura, con un design accattivante e 
            funzionalità avanzate per migliorare l esperienza utente 
            e favorire la conversione.
          </p>
        </div>
      </div>

      <div className={style.divService}>
        <div className={style.textService2}>
          <div className={style.titleContainer}>
            <h3 ref={titleRef2} className={`${style.serviceTitle2} barlow`}>
              Social Media
            </h3>
            <div
              ref={underlineRef2}
              className={`${style.underline} ${isHovered2 ? style.show : ""}`}
            ></div>
          </div>
          <p className={`${style.description2} barlow`}>
            Gestisco i tuoi social media in modo strategico 
            per aumentare l engagement e la visibilità del tuo brand. 
            Dalla creazione di contenuti alla pianificazione 
            editoriale, mi occupo di ogni aspetto per assicurare una presenza 
            online professionale.
          </p>
        </div>
        <Link
          href="/servizi/social-media"
          className={style.imgService}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <Image src={Phone} className={style.phone1} alt="Smartphone" />
          <Image src={Phone1} className={style.phone2} alt="Smartphone" />
        </Link>
      </div>

      <Image className={style.puntini} src={Puntini} alt="" />
      <div className={style.color3}></div>
      <div className={style.color4}></div>
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
