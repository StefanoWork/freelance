"use client";
import { useEffect } from "react";
import Image from "next/image";
import style from "./Hero.module.css";
import Cerchio from "../../../Images/Cerchio.png";

import Bolla from "../../../Images/Bolla.png";
import Oblique from "../../../Images/Oblique.png";
import Email from "../../../Images/Social/Email.webp";
import Facebook from "../../../Images/Social/Facebook.webp";
import Instagram from "../../../Images/Social/Instagram.webp";
import TikTok from "../../../Images/Social/TikTok.webp";
import LinkedIn from "../../../Images/Social/LinkedIn.webp";


export default function Hero() {
  // const theme = useSelector((state) => state.theme);

  useEffect(() => {
    function positionCerchio() {
      const highlightedWord = document.getElementById('highlighted-word');
      const cerchio = document.getElementById('cerchio');

      if (highlightedWord && cerchio) {
        const rect = highlightedWord.getBoundingClientRect();
        cerchio.style.top = `${rect.top + window.scrollY}px`;
        cerchio.style.left = `${rect.left + window.scrollX}px`;
      }
    }

    window.addEventListener('resize', positionCerchio);
    window.addEventListener('load', positionCerchio);

    // Call the function initially to position the cerchio
    positionCerchio();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', positionCerchio);
      window.removeEventListener('load', positionCerchio);
    };
  }, []);


  return (
    <div className={style.heroDiv} id="Home">

        {/* <Image src={Oblique} alt="" className={style.oblique} /> */}
        
        <div className={style.divMain}>
          <h1 className={`${style.title} mulish`}>Unisci il tuo sito e i tuoi social in un'<span> <Image src={Cerchio} alt="" className={style.cerchio} id="cerchio" />identità</span> unica</h1> 
          <h2 className={`${style.subtitle} mulish`}>Aiuto liberi professionisti a creare una presenza online coerente, progettando siti web e grafiche social che si parlano tra loro.</h2>        
        </div>
        
      
      
        <Image src={Bolla} alt="" className={style.bolla} />
        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div> 
      
      <div className={style.divSocial}>
        <a className={style.btSocial} href="mailto:stefano87m.work@outlook.it">
          <Image src={Email} alt="Email" className={style.social} />
        </a>
        <a
          className={style.btSocial}
          href="https://www.facebook.com/profile.php?id=100086771147797"
        >
          <Image src={Facebook} alt="Facebook" className={style.social} />
        </a>
        <a
          className={style.btSocial}
          href="https://www.instagram.com/stefano.montemarli/"
        >
          <Image src={Instagram} alt="Instagram" className={style.social} />
        </a>
        <a
          className={style.btSocial}
          href="https://www.tiktok.com/@stefanomontemarli?lang=it-IT"
        >
          <Image src={TikTok} alt="TikTok" className={style.social} />
        </a>
        <a
          className={style.btSocial}
          href="https://www.linkedin.com/in/stefano-montemarli/"
        >
          <Image src={LinkedIn} alt="LinkedIn" className={style.social} />
        </a>
      </div>
      
    </div>
  );
}
