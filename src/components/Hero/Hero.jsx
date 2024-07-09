"use client";

import Image from "next/image";

import style from "./Hero.module.css";
import Circle from "../../Images/Circle.png";
import PlayButton from "../../Images/Play.png";
import StopButton from "../../Images/Close.png";
import Bolla from "../../Images/Bolla.png";
import Oblique from "../../Images/Oblique.png";
import Email from "../../Images/Social/Email.png";
import Facebook from "../../Images/Social/FacebookC.png";
import Instagram from "../../Images/Social/InstagramC.png";
import TikTok from "../../Images/Social/TikTokC.png";
import LinkedIn from "../../Images/Social/LinkedInC.png";

import { useRef, useState } from "react";

export default function Hero() {
  // const theme = useSelector((state) => state.theme);

  const circularIframeRef = useRef(null);

  const [loading, setLoading] = useState(false);

  function PlayVideo() {
    setLoading(true);
    return new Promise((resolve) => {
      const circularIframe = circularIframeRef.current;
      const iframe = document.createElement("iframe");
      iframe.src = "https://fast.wistia.com/embed/medias/y9yfs8eki0";
      iframe.id = "video";
      iframe.className = style.video;
      circularIframe.appendChild(iframe);

      iframe.onload = () => {
        setLoading(false);
        console.log("loaded");
        resolve();
      };
    }).then(() => {
      const circle = document.getElementById("Circle");
      const play = document.getElementById("play");
      const video = document.getElementById("video");
      const stop = document.getElementById("stop");
      circle.style.opacity = 0;
      play.style.opacity = 0;
      video.style.visibility = "visible";
      video.style.opacity = 1;
      stop.style.opacity = 1;
    });
  }

  function StopVideo() {
    const circle = document.getElementById("Circle");
    const play = document.getElementById("play");
    const video = document.getElementById("video");
    const stop = document.getElementById("stop");
    circle.style.opacity = 1;
    play.style.opacity = 1;
    video.style.opacity = 0;
    video.style.visibility = "hidden";
    stop.style.opacity = 0;

    const circularIframe = circularIframeRef.current;
    const iframe = document.getElementById("video");
    if (iframe) {
      circularIframe.removeChild(iframe);
    }
  }

  return (
    <div className={style.heroDiv} id="Home">
      <div className={style.heroSx}>
        <Image src={Oblique} alt="Oblique" className={style.oblique} />
        <div className={style.myWork}>
          SOCIAL MEDIA MANAGER,
          <br />
          WEB DESIGNER & FRONT-END DEVELOPER
        </div>
        <div className={style.divMe}>
          <div className={style.myName}>Stefano Montemarli</div>
          <div className={style.heroDown}>
            <div className={style.line}></div>
            <p className={style.myDescription}>
              Gestisco profili social e creo siti web. Sarò il tuo supporto e lo
              faccio con passione e dedizione
            </p>
          </div>
        </div>
      </div>
      <div className={style.heroDx}>
        <Image src={Bolla} alt="Bolla" className={style.bolla} />
        <Image src={Circle} alt="Circle" id="Circle" className={style.circle} />
        <button className={style.play} id="play" onClick={PlayVideo}>
          <Image src={PlayButton} alt="Play"></Image>
        </button>
        {loading && (
          <div className={style.loader}>
            <div className={style.loaderSpinner}></div>
          </div>
        )}
        <div className={style.circularIframe} ref={circularIframeRef}></div>
        <button className={style.stop} id="stop" onClick={StopVideo}>
          <Image src={StopButton} alt="Stop"></Image>
        </button>

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
      <div className={style.divSocial}>
        <a className={style.btSocial} href="mailto:stefanom.work@outlook.it">
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
