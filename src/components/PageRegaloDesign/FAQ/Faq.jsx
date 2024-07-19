import style from "./Faq.module.css";
import Image from "next/image";

import X from "../../../Images/X.png";
import XEmpty from "../../../Images/XEmpty.png";
import Puntini from "../../../Images/Puntini.png";

export default function Method() {
  // const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className={style.container}>
        <h2 className={`${style.title} mulish`}>Ti starai chiedendo</h2>

       
            <div className={style.row}>
                <div className={style.point}></div>
                <p className={style.description}>
                    Come faccio a trovare il tempo per realizzare un sito web senza tralasciare il mio focus principale, 
                    cioè vendere servizi ai miei clienti?
                </p>
            </div>
            <div className={style.row}>
                <div className={style.point}></div>
                <p className={style.description}>
                    Quali sono gli elementi essenziali che devo includere nel mio sito web per renderlo efficace?
                </p>
            </div>
         
            <div className={style.row}>
                <div className={style.point}></div>
                 <p className={style.description}>
                    Come posso assicurarmi che il design del mio sito web rispecchi il mio brand personale?
                </p>
            </div>
  
            <div className={style.row}>
                <div className={style.point}></div>
                <p className={style.description}>
                    Quali sono gli errori comuni da evitare nella creazione di un sito web?
                </p>
            </div>
        
           <div className={style.row}>
                <div className={style.point}></div>
                <p className={style.description}>
                    Come posso mantenere il mio sito web aggiornato senza dedicare troppo tempo?
                </p>
            </div>

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
