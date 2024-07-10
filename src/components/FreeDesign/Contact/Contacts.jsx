"use client";

import style from "./Contacts.module.css";
import Image from "next/image";
import PuntiniBlu from "../../../Images/PuntiniBlu.png";

import { useRef, useState } from "react";

export default function Contacts() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: event.target.method,
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.container} id="Contacts">
      {isSubmitted ? (
        <h2 className={` ${style.title} mulish`}>
          Grazie per aver inviato il modulo
        </h2>
      ) : (
        <h2 className={` ${style.title} mulish`}>
          Ottieni la videolezione gratuita
        </h2>
      )}

      {isSubmitted ? (
        <p className={`${style.sended} barlow`}>
          Riceverai la videolezione sulla tua casella email
        </p>
      ) : (
        <form
          className={style.form}
          ref={form}
          action="https://assets.mailerlite.com/jsonp/644337/forms/117519243837179650/subscribe"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label className={`${style.label} barlow`} htmlFor="fields[name]">
            Nome*
          </label>
          <input
            className={style.input}
            type="text"
            name="fields[name]"
            required="true"
            placeholder="Inserisci il tuo nome"
          />
          <label
            className={`${style.label} barlow`}
            htmlFor="fields[last_name]"
          >
            Cognome*
          </label>
          <input
            className={style.input}
            type="text"
            name="fields[last_name]"
            required="true"
            placeholder="Inserisci il tuo cognome"
          />

          <label className={`${style.label} barlow`} htmlFor="fields[email]">
            Email*
          </label>
          <input
            className={style.input}
            type="email"
            name="fields[email]"
            required="true"
            placeholder="Inserisci il tuo indirizzo di posta elettronica"
          />
          <label className={`${style.label} barlow`} htmlFor="fields[phone]">
            Telefono*
          </label>
          <input
            className={style.input}
            type="tel"
            name="fields[phone]"
            required="true"
            placeholder="Inserisci il tuo numero di telefono"
          />

          <div className={style.btForm}>
            <input
              className={`${style.invia} barlow`}
              type="submit"
              value="Ricevi la tua lezione gratuita!"
              id="button"
            />
          </div>
        </form>
      )}

      <Image src={PuntiniBlu} alt="" className={style.puntiniBlu} />

      <div className={style.color3}></div>
      <div className={style.color4}></div>
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
