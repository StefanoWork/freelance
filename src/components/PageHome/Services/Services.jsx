"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import style from "./Services.module.css";

import Check from "../../../Images/check.png";
import Puntini from "../../../Images/PuntiniBlu.png";

const gridData = [
  { col1: "Strategia personalizzata", col2: Check.src, col3: Check.src },
  { col1: "Piano editoriale", col2: Check.src, col3: "-" },
  { col1: "Realizzazione stile grafico", col2: Check.src, col3: Check.src },
  { col1: "Creazione contenuti", col2: Check.src, col3: "-" },
  { col1: "Ottimizzazione ricerca Google", col2: "-", col3: Check.src },
  { col1: "Analisi dati", col2: Check.src, col3: Check.src },
];

const gridDataMobile = [
  { col2: "Strategia personalizzata", col3: "Strategia personalizzata" },
  { col2: "Piano editoriale", col3: "Realizzazione stile grafica" },
  { col2: "Realizzazione stile", col3: "Realizzazione bozze animate" },
  { col2: "Creazione contenuti", col3: "SEO" },
  { col2: "Analisi dati", col3: "Analisi dati" },
  { col2: "Consulenza continuativa", col3: "Consulenza continuativa" },
];


export default function Services() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dataToMap = isMobile ? gridDataMobile : gridData;

  if (!dataToMap) {
    return null;
  }

  return (
    <div className={style.container} id="Services">
      <h2 className={` ${style.title} mulish`}>Accedi ai miei servizi</h2>

      <div className={style.containerService}>
        <div className={style.cardContainer}>
          <div className={style.sx}>
          </div>
          <div className={style.dx}>
            <div className={style.cardServiceS}>
              <p className={` ${style.nameService} mulish`}>Social Media</p>
              <p className={style.description}>I tuoi social gestiti con una strategia personalizzata</p>
              <Link
                href="/servizi/social-media"
                className={style.buttonService}>
                  Scopri
              </Link>
            </div>

            <div className={style.cardServiceW}>
              <p className={` ${style.nameService} mulish`}>Web Design</p>
              <p className={style.description}>Il sito creato su misura per il tuo target</p>
              <Link
                href="/servizi/web-design"
                className={style.buttonService}>
                  Scopri
              </Link>
            </div>
          </div>        
        </div>
        <div className={style.functionService}>
            {dataToMap.map((row, rowIndex) => (
              <div className={style.row} key={rowIndex}>
                <div className={style.colorRow}></div>
                <div className={style.column}>
                  <div  className={style.col1}>{row.col1}</div>
                  <div className={style.colDx}>
                    <div  className={style.col2}>
                       {row.col2.endsWith('.png') || row.col2.endsWith('.webp') ? (
                        <Image src={row.col2} alt="Check" height={40} width={40} />
                      ) : (
                        row.col2
                      )}
                    </div>
                    <div  className={style.col2}>
                        {row.col3.endsWith('.png') || row.col3.endsWith('.webp') ? (
                        <Image src={row.col3} alt="Check" height={40} width={40} />
                      ) : (
                        row.col3
                      )}
                    </div>
                  </div>
                </div>
               
              
              </div>
            ))}
        </div>
           
      </div>
     

      <Image className={style.puntini} src={Puntini} alt="" />
      <div className={style.color3}></div>
      <div className={style.color4}></div>
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
