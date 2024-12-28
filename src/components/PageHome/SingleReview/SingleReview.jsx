import style from "./SingleReview.module.css";
import Image from "next/image";

export default function SingleReview({
  Media,
  Testo,
  Nome,
  Logo,
}) {

  const isVideoLink = (url) => {
    return typeof url === 'string' && url.includes('wistia.net');
  };

  return (
    <div className={`${style.review} ${isVideoLink ? style.hasVideo : style.noVideo}`}>
      <div className={style.Sx}>
        {isVideoLink(Media) ? (
          <iframe className={style.media} src={Media} />
        ) : (
          <Image src={Media} alt="Image" className={style.image} width={100} height={800} />
        )}
      </div>
      <div className={style.Dx}>
        <div className={style.author}>
          <Image src={Logo} alt="Logo" className={style.logo} />
          <p className={`${style.name} barlow`}>{Nome}</p>
        </div>
        <p className={`${style.text} barlow`}>{Testo}</p>
      
      </div>
    </div>
  );
}
