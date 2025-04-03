import { useRef, useState } from "react";
import Title from "../TitleMain/Title";
import "./galary.css";

const Galary = () => {
  const [ImgSrc, setImgSrc] = useState<string>();
  const [ImgText, setImgText] = useState<string>();

  const ref = useRef<HTMLDivElement>(null);

  const handleImage = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setImgSrc(event.currentTarget.src);
    setImgText(event.currentTarget.alt);
    ref.current?.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (
      e.currentTarget.classList.contains("lightbox") &&
      e.currentTarget.classList.contains("show")
    ) {
      e.currentTarget.classList.remove("show");
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }
  };

  return (
    <div className="galary">
      <img src="image/gallary/shape.png" className="galary-shape-1" alt="" />
      <Title title="معرض صور اعمالنا" />
      <div className="container">
        <div className="box">
          <img
            src="image/gallary/galary-1.png"
            alt="صورة رقم 1"
            onClick={(e) => handleImage(e)}
          />
        </div>
        <div className="box">
          <img
            src="image/gallary/galary-2.png"
            alt="صورة رقم 2"
            onClick={(e) => handleImage(e)}
          />
        </div>
        <div className="box">
          <img
            src="image/gallary/galary-3.png"
            alt="صورة رقم 3"
            onClick={(e) => handleImage(e)}
          />
        </div>
        <div className="box">
          <img
            src="image/gallary/galary-4.png"
            alt="صورة رقم 4"
            onClick={(e) => handleImage(e)}
          />
        </div>
        <div className="box">
          <img
            src="image/gallary/galary-5.png"
            alt="صورة رقم 5"
            onClick={(e) => handleImage(e)}
          />
        </div>
        <div className="box">
          <img
            src="image/gallary/galary-6.png"
            alt="صورة رقم 6"
            onClick={(e) => handleImage(e)}
          />
        </div>
        <div className="box">
          <img
            src="image/gallary/galary-7.png"
            alt="صورة رقم 7"
            onClick={(e) => handleImage(e)}
          />
        </div>
        <div className="box">
          <img
            src="image/gallary/galary-8.png"
            alt="صورة رقم 8"
            onClick={(e) => handleImage(e)}
          />
        </div>
      </div>
      <div className="lightbox" onClick={(e) => handleClick(e)} ref={ref}>
        <div className="box" onClick={(e) => e.stopPropagation()}>
          <h2>{ImgText}</h2>
          <img src={`${ImgSrc}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galary;
