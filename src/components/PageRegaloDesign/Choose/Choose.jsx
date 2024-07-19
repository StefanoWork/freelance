import style from "./Choose.module.css";

export default function Choose() {
    return (
    <div className={style.container}>
        <h2 className={`${style.title} mulish`}>La scelta</h2>
        <div className={style.choose}>
            <div className={style.chooseX}>
                <div className={style.choose1}></div>
                <h3 className={`${style.subtitle} barlow`}>Fai tutto da solo</h3>
                <ul>
                    <li className={`${style.li} barlow `}><div className={style.pointRed}/>Investi molto tempo nella formazione</li>
                    <li className={`${style.li} barlow `}><div className={style.pointRed}/>Spendi soldi per corsi e risorse</li>
                    <li className={`${style.li} barlow `}><div className={style.pointRed}/>Rischi di fare errori che potrebbero costare caro</li>
                    <li className={`${style.li} barlow `}><div className={style.pointRed}/>Risultati incerti e spesso non immediati</li>
                </ul>
            
            </div>
            <div className={style.chooseV}>
                <div className={style.choose2}></div>
                <h3 className={`${style.subtitle} barlow`}>Ti affidi a me</h3>
                <ul>
                    <li className={`${style.li} barlow `}><div className={style.pointBlu}/>Risparmi tempo prezioso</li>
                    <li className={`${style.li} barlow `}><div className={style.pointBlu}/>Eviti costi aggiuntivi in formazione</li>
                    <li className={`${style.li} barlow `}><div className={style.pointBlu}/>Ottieni risultati professionali ed immediati</li>
                    <li className={`${style.li} barlow `}><div className={style.pointBlu}/>Concentrati sul tuo business</li>
                </ul>
            </div>
        </div>
    </div>
    )
}