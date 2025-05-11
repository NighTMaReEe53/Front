import ReactPlayer from "react-player";
import AbouT from "../Components/About/AbouT";
import Title from "../Components/TitleMain/Title";
import News from "../Components/News/News";
import Product from "../Components/Product/Prodect";

const About = () => {
  return (
    <div className="about-us">
      <AbouT />
      <Title title="ماذا نقدم" />
      <div className="content-about">
        <img src="SVG/circle.svg" className="image-about-shape-1" alt="" />
        <img
          src="image/shape/shape-17.png"
          className="shape-about-us-2"
          alt=""
        />
        <div className="container">
          <div className="content-boxes">
            <div className="box">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=RDV1LCFFoAc"}
                controls={true}
                width={"100%"}
                height={"250px"}
              />
            </div>
            <div className="box">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=CdKyXrkO188"}
                controls={true}
                width={"100%"}
                height={"250px"}
              />
            </div>
            <div className="box">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=jT_6xR0pu8c"}
                controls={true}
                width={"100%"}
                height={"250px"}
              />
            </div>
            <div className="box">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=vDlEPqu8hbo"}
                controls={true}
                width={"100%"}
                height={"250px"}
              />
            </div>
          </div>
        </div>
      </div>
      <Product />
      <News />
    </div>
  );
};

export default About;
