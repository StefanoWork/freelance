"use client";

import style from "./Method.module.css";
import Image from "next/image";
import Lottie from 'lottie-react';


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import circle from "../../../Images/CerchioS.png";

import Puzzle from "../../../Images/Icone/Puzzle.json";
import Creativity from "../../../Images/Icone/Creativity.json";
import Analisi from "../../../Images/Icone/Analisi.png";

export default function Method() {
  // const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className={style.container} id="Method">
        <h2 className={`${style.title} mulish`}>Il mio metodo</h2>

        <Container className={style.grid}>
          <Row className="flex-column flex-sm-row">
            <Col sm={6} className={style.text}>
              <div className={style.stepContainer}>
                <div className={style.step}>
                  <Image src={circle} alt="" className={style.circle} />
                  <p className={`${style.number} barlow `}>1</p>
                </div>
              </div>
              <p className={`${style.name} barlow `}>Strategia unificata</p>
              <p className={`${style.description} barlow mr-md-36 `}>
               Creo una strategia personalizzata che può includere sia il sito web che i 
               social media, mantenendo uno stile armonioso e coerente. Anche se si 
               tratta di servizi distinti, la comunicazione sarà sempre autentica e 
               mirata al tuo pubblico ideale.
              </p>
            </Col>
            <Col sm={6} className={style.animation}>
              <Lottie animationData={Puzzle} />
            </Col>
          </Row>

          <Row className="flex-column flex-sm-row">
            <Col sm={6} className={style.animation}>
              <Lottie animationData={Creativity} alt="" className={style.icon} />
            </Col>
            <Col sm={6} className={style.text}>
              <div className={style.stepContainer}>
                <div className={`${style.step} ml-20`}>
                  <Image src={circle} alt="" className={style.circle} />
                  <p className={`${style.number} barlow `}>2</p>
                </div>
              </div>
              <p className={`${style.name} barlow ml-md-20`}>Creatività senza limiti</p>
              <p className={`${style.description} barlow ml-md-20`}>
                Non esistono soluzioni preconfezionate. 
                Ogni progetto è una tela bianca dove sperimento idee 
                originali e design su misura. Ogni elemento è pensato per 
                distinguerti dalla concorrenza e rappresentare fedelmente 
                i tuoi valori.
              </p>
            </Col>
          </Row>

         <Row className="flex-column flex-sm-row">
            <Col sm={6} className={style.text}>
              <div className={style.stepContainer}>
                <div className={style.step}>
                  <Image src={circle} alt="" className={style.circle} />
                  <p className={`${style.number} barlow `}>3</p>
                </div>
              </div>
              <p className={`${style.name} barlow `}>Analisi continua</p>
              <p className={`${style.description} barlow mr-md-36 `}>
              Non basta creare: bisogna misurare, analizzare e migliorare. 
              Ti fornisco report dettagliati e analizziamo insieme i dati per ottimizzare costantemente la tua 
              presenza online con strategie basate su numeri reali.
              </p>
            </Col>
            <Col sm={6} className={style.animation}>
              <Image src={Analisi} alt="" className={style.icon} />
            </Col>
          </Row>

          <Row className="flex-column flex-sm-row">
            <Col sm={6} className={style.animation}>
              <Image src={circle} alt="" className={style.altra} />
            </Col>
            <Col sm={6} className={style.text}>
              <div className={style.stepContainer}>
                <div className={`${style.step}  ml-md-20`}>
                  <Image src={circle} alt="" className={style.circle} />
                  <p className={`${style.number} barlow `}>4</p>
                </div>
              </div>
              <p className={`${style.name} barlow ml-md-20`}>Contenuti che catturano</p>
              <p className={`${style.description} barlow ml-md-20`}>
                Dal design del sito ai post sui social, ogni contenuto è pensato per 
                raccontare la tua storia in modo autentico e coinvolgente. 
                L obiettivo è trasformare i visitatori e i follower in clienti 
                fedeli e appassionati del tuo brand.
              </p>
            </Col>
          </Row>

          <Row className="flex-column flex-sm-row">
            <Col sm={6} className={style.text}>
              <div className={style.stepContainer}>
                <div className={style.step}>
                  <Image src={circle} alt="" className={style.circle} />
                  <p className={`${style.number} barlow `}>5</p>
                </div>
              </div>
              <p className={`${style.name} barlow `}>Collaborazione costante</p>
              <p className={`${style.description} barlow mr-md-36`}>
                Ti coinvolgo in ogni fase del processo, 
                dall idea iniziale fino alla realizzazione finale. 
                Ascolto le tue esigenze, ti offro consulenza e ti tengo 
                aggiornato su ogni progresso.
              </p>
            </Col>
            <Col sm={6} className={style.animation}>
              <Image src={circle} alt="" className={style.altra} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
