"use client";

import style from "./Contacts.module.css";
import Image from "next/image";

import Cerchio1 from "../../Images/Cerchio1.png";
import Cerchio2 from "../../Images/Cerchio2.png";
import PuntiniBlu from "../../Images/PuntiniBlu.png";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contacts() {
  const form = useRef();
    const [buttonText, setButtonText] = useState('Invia');


  const sendEmail = (e) => {
    e.preventDefault();
    const sended = document.getElementById("button");
    sended.value = "Invio in corso...";


    emailjs
      .sendForm(
        "service_7q9bb4m",
        "template_h4eydur",
        form.current,
        "jymmQ542M59Jy69Sb"
      )
      .then((result) => {
          sended.value = "Inviato!";
          sended.disabled = true;
          sended.style.backgroundColor = "#fc3c3c";
          form.current.reset();
        },(error) => {
          sended.value = "Ops... Riprova!";
        }
      );
  };

  return (
    <div className={style.container} id="Contacts">
      <h2 className={`${style.title} mulish`}>Contattami</h2>

      <form className={style.form} onSubmit={sendEmail} ref={form}>
        <label className={style.label} htmlFor="name">
          Nome e Cognome*
        </label>
        <input
          className={style.input}
          type="text"
          name="name"
          required="true"
          placeholder="Inserisci il tuo nome completo"
        />
        <label className={style.label} htmlFor="email">
          Email*
        </label>
        <input
          className={style.input}
          type="email"
          name="email"
          required="true"
          placeholder="Inserisci il tuo indirizzo di posta elettronica"
        />

        <label className={style.label} htmlFor="message">
          Messaggio*
        </label>
        <textarea
          className={style.inputArea}
          name="message"
          required="true"
          placeholder="Inserisci qui il tuo messaggio"
        />

        <div className={style.btForm}>
          <input
            className={style.invia}
            type="submit"
            value="Invia"
            id="button"
          />
        </div>
      </form>

      
      <Image src={PuntiniBlu} alt="" className={style.puntiniBlu} />
      <Image src={Cerchio1} alt="" className={style.cerchio1} />
      <Image src={Cerchio2} alt="" className={style.cerchio2} />

      <div className={style.color3}></div>
      <div className={style.color4}></div>
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
