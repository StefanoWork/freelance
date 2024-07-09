"use client";

import style from "./Strategy.module.css";
import Image from "next/image";

import Freccia from "../../Images/FrecciaLunga.png";
import Puntini from "../../Images/Puntini.png";

import React, { useEffect, useRef } from "react";
import parse from "html-react-parser";
import { useState } from "react";

export default function Strategy({
  currentPage,
  mItems,
  image1,
  image2,
  image3,
  image4,
  descrizione1,
  descrizione2,
  descrizione3,
  descrizione4,
}) {
  const imgDxClass = currentPage === "Web" ? style.imgDx : style.imgDxSocial;
  const imgDx2Class = currentPage === "Web" ? style.imgDx2 : style.imgDxSocial2;
  const imgDx3Class = currentPage === "Web" ? style.imgDx3 : style.imgDxSocial3;
  const imgDx4Class = currentPage === "Web" ? style.imgDx4 : style.imgDxSocial4;

  const [selectedCard, setSelectedCard] = useState(null);
  const [visibleCard, setVisibleCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const cardRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const descriptionRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  //Regola la visibilità di underline
  useEffect(() => {
    // Copia cardRefs.current in una variabile
    const currentRefs = cardRefs.current;

    // Utilizza currentRefs invece di cardRefs.current
    const observers = currentRefs.slice(0, -1).map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCard(index);
          } else if (visibleCard === index) {
            setVisibleCard(index - 1);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (currentRefs[index].current) {
          observer.unobserve(currentRefs[index].current);
        }
      });
    };
  }, [visibleCard]);

  //Regola l'opacità quando le card entrano ed escono dal viewport
  useEffect(() => {
    // Se lo schermo è di dimensioni mobili, ritorna e non eseguire il codice seguente
    if (window.matchMedia("(max-width: 600px)").matches) {
      return;
    }

    // Copia cardRefs.current in una variabile
    const currentRefs = cardRefs.current;

    const observers = currentRefs.slice(0, -1).map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.style.opacity = 0;
            descriptionRefs.current[index].current.style.opacity = 0;
          } else {
            ref.current.style.opacity = 1;
            descriptionRefs.current[index].current.style.opacity = 1;
          }
        },
        { threshold: 0.1 }
      );

      if (currentRefs[index + 1]?.current) {
        observer.observe(currentRefs[index + 1].current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (currentRefs[index + 1]?.current) {
          observer.unobserve(currentRefs[index + 1].current);
        }
      });
    };
  }, []);

  //Scrolla alla card selezionata
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();

      const target = document.querySelector(event.target.hash);
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    };

    const menuItems = document.querySelectorAll(`.${style.menuItem}`);
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", handleClick);
    });

    return () => {
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const menuItems = mItems;

  return (
    <div className={style.container} id="Strategy">
      <h2 className={style.title}>Il Metodo</h2>
      <div className={style.menu}>
        <Image src={Freccia} alt="" className={style.freccia} />
        <Image src={Puntini} alt="" className={style.puntini} />

        <div className={style.color1}></div>
        <div className={style.color2}></div>
        {menuItems.map((item, index) => (
          <div
            className={style.menuItem}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <a className={style.search} href={item.href}>
              <div className={style.titleMenu}>
                <div className={style.number}>{item.number}</div>
                <h4 className={style.description}>{item.description}</h4>
              </div>
              <div
                className={style.underline}
                style={{
                  opacity: visibleCard === index ? 1 : 0,
                }}
              ></div>
            </a>
          </div>
        ))}
      </div>

      <div className={style.mainWrapper}>
        <div className={style.stack}>
          <div className={style.paddingGlobal}>
            <div className={style.containerLarge}>
              <div className={style.stackWrapper}>
                <div className={`${style.stackCard} `} id="Ricerca">
                  <div className={style.first} ref={cardRefs.current[0]}>
                    <Image
                      className={imgDxClass}
                      src={image1}
                      alt="Servizio"
                    ></Image>
                  </div>
                  <div className={style.text}>
                    <div
                      className={` ${style.strategyDescription}`}
                      ref={descriptionRefs.current[0]}
                    >
                      <div className={style.numb}>
                        {mItems[0].number + mItems[0].description}
                      </div>
                      {parse(descrizione1)}
                    </div>
                  </div>
                </div>

                <div className={`${style.stackCard}`} id="Design">
                  <div className={style.first} ref={cardRefs.current[1]}>
                    <Image
                      className={imgDx2Class}
                      src={image2}
                      alt="Servizio"
                    ></Image>
                  </div>
                  <div className={style.text}>
                    <div
                      className={style.strategyDescription}
                      ref={descriptionRefs.current[1]}
                    >
                      <div className={style.numb}>
                        {mItems[1].number + mItems[1].description}
                      </div>
                      {parse(descrizione2)}
                    </div>
                  </div>
                </div>

                <div className={` ${style.stackCard}`} id="Sviluppo">
                  <div className={style.first} ref={cardRefs.current[2]}>
                    <Image
                      className={imgDx3Class}
                      src={image3}
                      alt="Servizio"
                    ></Image>
                  </div>
                  <div className={style.text}>
                    <div
                      className={style.strategyDescription}
                      ref={descriptionRefs.current[2]}
                    >
                      <div className={style.numb}>
                        {mItems[2].number + mItems[2].description}
                      </div>
                      {parse(descrizione3)}
                    </div>
                  </div>
                </div>

                <div
                  className={` ${style.stackCard} ${style.fourth}`}
                  id="Lancio"
                >
                  <div className={style.first} ref={cardRefs.current[3]}>
                    <Image
                      className={imgDx4Class}
                      src={image4}
                      alt="Servizio"
                    ></Image>
                  </div>
                  <div className={style.text}>
                    <div
                      className={style.strategyDescription}
                      ref={descriptionRefs.current[3]}
                    >
                      <div className={style.numb}>
                        {mItems[3].number + mItems[3].description}
                      </div>
                      {parse(descrizione4)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
