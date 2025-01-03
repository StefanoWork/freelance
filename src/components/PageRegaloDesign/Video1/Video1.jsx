import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import style from "./Video1.module.css";
import Image from "next/image";

import Bolla from "../../../Images/Bolla.png";

export default function Video1() {
    return (
         <div className={style.container} id="Method">
            <h2 className={` ${style.title} mulish`}>Come creare un<br/> Sito Web</h2>
            <iframe className={style.video} src="https://go.screenpal.com/player/cZloo9nnmb5?width=100%&height=100%&ff=1&title=0" title="Come crescere con un sito web" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; fullscreen" allowfullscreen></iframe>

            <Image className={style.bolla1} src={Bolla} alt="" />
            <Image className={style.bolla2} src={Bolla} alt="" />
            <div className={style.color}/>
        </div>
    );
    }