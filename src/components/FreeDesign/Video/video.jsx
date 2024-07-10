import style from "./video.module.css";

export default function Video() {
  return (
    <div className={style.container}>
      <h2 className={` ${style.title} mulish`}>Mi presento</h2>
      <iframe
        src="https://fast.wistia.com/embed/medias/o9mv8sraq9"
        title="Video"
        className={style.video}
      ></iframe>

      <div className={style.color3}></div>
      <div className={style.color4}></div>
    </div>
  );
}
