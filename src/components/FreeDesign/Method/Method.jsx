import style from "./Method.module.css";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import X from "../../../Images/X.png";
import XEmpty from "../../../Images/XEmpty.png";
import Puntini from "../../../Images/Puntini.png";

export default function Method() {
  return (
    <>
      <div className={style.container} id="Method">
        <h2 className={` ${style.title} mulish`}>Cosa ti svelerò</h2>

        <Container className={style.grid}>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Ottimizzazione
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Scopri come ottimizzare il tuo sito web per migliorare la sua
                visibilità sui motori di ricerca. Impara a utilizzare le
                tecniche SEO per aumentare il traffico sul tuo sito e
                raggiungere più efficacemente i tuoi clienti.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Curiosità <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Trasforma il tuo sito web in un luogo che suscita curiosità e
                interesse. Scopri come creare contenuti che attirano
                l&apos;attenzione dei tuoi visitatori e li spingono a saperne di
                più su di te e sulla tua attività.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Grafica <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Impara come rendere il tuo sito web graficamente accattivante.
                Scopri come utilizzare il design e le immagini per catturare
                l&apos;attenzione dei tuoi visitatori e migliorare la loro
                esperienza sul tuo sito.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Contenuti <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Scopri come creare contenuti coinvolgenti e di valore per i tuoi
                clienti. Impara a scrivere articoli, blog e descrizioni di
                prodotti che siano interessanti per i tuoi visitatori e che li
                aiutino a comprendere meglio i tuoi prodotti o servizi.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              SEO oriented
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Impara come creare contenuti che siano ottimizzati per i motori
                di ricerca. Scopri come utilizzare le parole chiave e le
                tecniche SEO per migliorare la visibilità del tuo sito web e
                raggiungere i tuoi clienti ideali.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Target <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Scopri come identificare e raggiungere il tuo target di
                riferimento. Impara a comprendere le esigenze e le preferenze
                dei tuoi clienti ideali e a creare un sito web che risponda alle
                loro esigenze e li fidelizzi.
              </p>
            </Col>
          </Row>
        </Container>

        <Image src={X} alt="" className={style.x} />
        <Image src={XEmpty} alt="" className={style.xEmpty} />
        <Image src={Puntini} alt="" className={style.puntini} />

        <div className={style.color2}></div>
        <div className={style.color3}></div>
        <div className={style.color4}></div>
      </div>
    </>
  );
}
