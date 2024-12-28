"use client";

import style from "./Call.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef } from "react";

import Bolla from "../../../Images/Bolla.png";

export default function Call() {
  const div = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;

    // Make the div visible initially
    if (div.current) {
      div.current.classList.add(style.visible);
    }

    const onScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) {
        // upscroll code
        div.current.classList.remove(style.visible);
      } else {
        // downscroll code
        div.current.classList.add(style.visible);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={style.div}>
      <div ref={div} className={style.call} id="Call">
        <div className={`${style.title} barlow`}>
          Prenota una consulenza gratuita
        </div>
        <Link
          className={`${style.contatti} barlow`}
          href="/prenotazione-call">
          Inizia
        </Link>
        <Image src={Bolla} alt="" className={style.bolla} />
      </div>
    </div>
  );
}
