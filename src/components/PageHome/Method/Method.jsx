import style from "./Method.module.css";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import X from "../../../Images/X.png";
import XEmpty from "../../../Images/XEmpty.png";
import Puntini from "../../../Images/Puntini.png";

export default function Method() {
  // const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className={style.container} id="Method">
        <h2 className={style.title}>Il mio metodo</h2>

        <Container className={style.grid}>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Servizio completo <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Offro un servizio completo di web design e gestione dei social
                media, assicurando coerenza nel design e nella comunicazione del
                tuo brand.
              </p>
            </Col>
            <Col sm={12} className={style.name}>
              Creatività <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Non mi limito a copiare quello che fanno gli altri, ma
                sperimento nuove idee e soluzioni. Nessun template già pronto,
                ma 100% personalizzato.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Report e statistiche <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Ti invio report dettagliati con le statistiche e le analisi, per
                mostrarti i risultati ottenuti e le possibili azioni da
                intraprendere.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Contenuti unici <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Creo contenuti unici e personalizzati per catturare
                l`&lsquo;`attenzione del tuo pubblico, promuovendo
                l`&lsquo;`interazione e l`&lsquo;`engagement con il tuo brand.
              </p>
            </Col>
          </Row>

          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Coinvolgimento
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Collaboro strettamente con te in ogni fase del processo di
                sviluppo, ascoltando attentamente le tue esigenze e fornendo
                consulenza esperta, con la possibilità di seguire il progetto in
                ogni sua fase.
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
