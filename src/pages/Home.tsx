import AbouT from "../Components/About/AbouT";
import Contact from "../Components/Contact/Contact";
import Galary from "../Components/galary/Galary";
import News from "../Components/News/News";
import CircleBlur from "../Components/overlay/CircleBlur";
import Services from "../Components/Serv_Section/Services";
import Work from "../Components/Work/Work";
import "../Styles/Home.css";
import { motion } from "framer-motion";
import Product from "../Components/Product/Prodect";
import OurNews from "../Components/OurNews/OurNews";

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              اهلا وسهلا بحضراتكم, نحن منصة <span>تدويري</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {" "}
              نحن عالم واسع لعمل تدوير للنفايات الالكترونية ونسعي الي تحقيق
              رغباتك بأكبر قدر ممكن
            </motion.p>
          </div>
          <div className="image">
            <motion.img
              src="image/landing.png"
              alt=""
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
      {/* Start Section ABout */}
      <AbouT />
      {/* End Section ABout */}
      {/* Start Section Services */}
      <Services />
      {/* End Section Services */}
      <Product />
      {/* Start Section Galary */}
      <Galary />
      {/* End Section Galary */}
      {/* Start Section Work */}
      <Work />
      {/* End Section Work */}
      {/* Start Team News */}
      <News />
      {/* End Team News */}
      <OurNews />
      {/* Start Team Contact */}
      <Contact />
      {/* End Team Contact */}
    </>
  );
};

export default Home;
