import style from "./FollowMe.module.css";
import Image from "next/image";

import Instagram from "../../../Images/Social/Instagram.webp";
import TikTok from "../../../Images//Social/TikTok.webp";
import LinkedIn from "../../../Images/Social/LinkedIn.webp";
import Facebook from "../../../Images/Social/Facebook.webp";

export default function FollowMe() {
  return (
    <div className={style.container}>
      <div className={style.first}>
        <h2 className={` ${style.title} mulish`}>I miei social</h2>
        <di className={style.dots}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circleLess}></div>
          <div className={style.circleLess}></div>
          <div className={style.circleLess}></div>
          <div className={style.circleLess}></div>
          <div className={style.circleZero}></div>
          <div className={style.circleZero}></div>
          <div className={style.circleZero}></div>
          <div className={style.circleZero}></div>
        </di>
      </div>

      <div className={style.second}>
        <div className={style.blockDiv}>
          <div className={style.div}>
            <a href="https://www.instagram.com/stefano.montemarli/">
              <Image
                className={style.social}
                src={Instagram}
                alt="Instagram"
              />
            </a>
            <a href="https://www.tiktok.com/@stefanomontemarli?lang=it-IT">
              <Image className={style.social} src={TikTok} alt="TikTok" />
            </a>
          </div>
          <div className={style.div}>
            <a href="https://www.facebook.com/profile.php?id=100086771147797">
              <Image className={style.social} src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/stefano-montemarli/">
              <Image className={style.social} src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
