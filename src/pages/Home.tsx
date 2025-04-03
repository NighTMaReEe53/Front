import AbouT from "../Components/About/AbouT";
import Contact from "../Components/Contact/Contact";
import Galary from "../Components/galary/Galary";
import News from "../Components/News/News";
import CircleBlur from "../Components/overlay/CircleBlur";
import Services from "../Components/Serv_Section/Services";
import Team from "../Components/Team/Team";
import Work from "../Components/Work/Work";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <CircleBlur text="right" />
      <div className="landing">
        <img
          src="image/overlay-landing.png"
          className="land-overlay"
          alt="overlay"
        />
        <img
          src="image/shape/shape-6.png"
          className="land-overlay-5"
          alt="overlay"
        />
        <img
          src="image/shape/shape-7.png"
          className="land-overlay-7"
          alt="overlay"
        />
        <img
          src="image/shape/shape-1.png"
          className="land-overlay-1"
          alt="overlay"
        />
        <img
          src="image/shape/shape-11.png"
          className="land-overlay-11"
          alt="overlay"
        />
        <div className="container">
          <div className="text">
            <h2>
              اهلا وسهلا بحضراتكم, نحن منصة <span>تدويري</span>
            </h2>
            <p>
              {" "}
              نحن عالم واسع لعمل تدوير للنفايات الالكترونية ونسعي الي تحقيق
              رغباتك بأكبر قدر ممكن
            </p>
          </div>
          <div className="image">
            <img src="image/landing.png" alt="" />
          </div>
        </div>
      </div>
      {/* Start Section ABout */}
      <AbouT />
      {/* End Section ABout */}
      {/* Start Section Services */}
      <Services />
      {/* End Section Services */}
      {/* Start Section Galary */}
      <Galary />
      {/* End Section Galary */}
      {/* Start Section Work */}
      <Work />
      {/* End Section Work */}
      {/* Start Team News */}
      <News />
      {/* End Team News */}
      {/* Start Team Team */}
      <Team />
      {/* End Team Team */}
      {/* Start Team Contact */}
      <Contact />
      {/* End Team Contact */}
    </>
  );
};

export default Home;
