import style from "./Video2.module.css";

export default function Video2() {
    return (
        <div className={style.container} id="Method">
            <div className={style.text}>
                <h2 className={` ${style.title} mulish`}>Video Bonus</h2>
                <h3 className={` ${style.subtitle} mulish`}>Esempi di siti web di successo</h3>
            </div>
         
            <iframe className={style.video} src="https://fast.wistia.com/embed/medias/7camipfw73" title="Come crescere con un sito web" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
        </div>
    );
    }