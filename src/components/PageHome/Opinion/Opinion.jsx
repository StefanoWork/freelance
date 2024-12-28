"use client";

import style from "./Opinion.module.css";
import Image from "next/image";
import { useState, useRef } from "react";

import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

import SingleReview from "../SingleReview/SingleReview";
import Bolla from "../../../Images/Bolla.png";

import Title1 from "../../../Images/Recensioni/1.png";
import Recensione1 from "../../../Images/Recensioni/Recensione1.webp";
import Recensione2 from "../../../Images/Recensioni/Recensione2.png";



export default function Opinion() {
  const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);


  const reviews = [
    {
      Testo: "Lavorare con Stefano è stato molto utile perché mi ha permesso di risparmiare molto tempo, utile per la mia attività, oltre che a consentirmi di trovare molti clienti grazie alla sua proattività nella creazione di contenuti per i social.",
      Media: "https://fast.wistia.net/embed/iframe/y0svk4avw5?seo=false&videoFoam=true",
      Nome: "Matteo Mangili",
      Logo: Recensione1,
      text: "#00000",
      bg: "var(--rosso)"
    },
     {
      Testo: "Lavorare con Stefano è stato un vero piacere! Grazie al sito web che ha creato per il mio negozio di gioielli fatti a mano, ho potuto raggiungere molti più clienti. La sua attenzione ai dettagli e la sua creatività hanno davvero fatto la differenza.",
      Media: Recensione2,
      Nome: "Elisa Montemarli",
      Logo: Recensione2,
      text: "#ffffff",
      bg: "var(--blu)"
    },
  ];

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth / 2,
        behavior: 'smooth',
      });
      carouselRef.current.classList.add(style.scrolled);

    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth / 2,
        behavior: 'smooth',
      });
      carouselRef.current.classList.add(style.scrolled);

    }
  }; 


  return (
    <div className={style.container} id="Review">
      <h2 className={`${style.title} mulish`}>
          <span>Ho aiutato i</span>
          <Image src={Title1} className={style.imageTitle} height={55} width={65}/>
          <span>miei clienti a far crescere</span> 
          <Image src={Recensione2} className={style.imageTitle} height={55} width={65}/>
          <span>il loro business.</span>
          <br />
          <br />
          <span>Il prossimo potresti essere tu!</span>
      </h2>

        <div className={style.buttonContainer}>
          <p className={style.titleCarousel}>Cosa dicono i clienti di me:</p>
          <div>
            <button onClick={handlePrev} className={style.buttonBack}><IoMdArrowBack className={style.icon}/></button>
            <button onClick={handleNext} className={style.buttonForward}><IoMdArrowForward className={style.icon}/></button>
          </div>
        </div>
      

        <div className={` ${style.carousel}`} ref={carouselRef}>
          {reviews.map((review, index) => (
          <div 
              key={index} 
              className={`${style.card} ${index <= currentIndex ? 'scrolled' : ''}`}
              style={{backgroundColor: review.bg, color: review.text}}>
            <SingleReview {...review}  />
          </div>
        ))}
        </div>
    
     

      <Image className={style.bolla} src={Bolla} alt="" />
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
