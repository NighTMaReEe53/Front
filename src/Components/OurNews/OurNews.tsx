import { CiRead } from "react-icons/ci";
import Button from "../Button";
import Title from "../TitleMain/Title";
import "./ournews.css";
import { motion } from "framer-motion";

const OurNews = () => {
  return (
    <div className="our-news">
      <img src="image/shape/shape-15.png" className="our-news-shape-1" alt="" />
      <img src="image/shape/shape-17.png" className="our-news-shape-2" alt="" />
      <img src="image/shape/shape-11.png" className="our-news-shape-3" alt="" />
      <Title title="بعض المقالات" />
      <div className="container">
        <motion.div
          className="box"
          // initial={{ opacity: 0, x: -100 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.5 }}
        >
          <img src="image/gallary/galary-7.png" alt="" />
          <div className="text">
            <h2>المقالة الاولة</h2>
            <p>
              مع تطور التكنولوجيا السريع، أصبحت الأجهزة الإلكترونية جزءًا
              أساسيًا من حياتنا اليومية. لكن مع زيادة استخدامها، تزداد أيضًا
              مشكلة النفايات الإلكترونية، والتي تشمل أجهزة الكمبيوتر والهواتف
              المحمولة والتلفزيونات والبطاريات وغيرها من المعدات الإلكترونية
              التي يتم التخلص منها بعد انتهاء عمرها الافتراضي.
            </p>
            <Button
              myClass="main-btn"
              children={
                <>
                  <CiRead size={25} />
                  قراءة المزيد
                </>
              }
            />
          </div>
        </motion.div>
        <motion.div
          className="box"
          // initial={{ opacity: 0, scale: 0 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="image/gallary/galary-4.png" alt="" />
          <div className="text">
            <h2>المقالة الثانية</h2>
            <p>
              مع تطور التكنولوجيا السريع، أصبحت الأجهزة الإلكترونية جزءًا
              أساسيًا من حياتنا اليومية. لكن مع زيادة استخدامها، تزداد أيضًا
              مشكلة النفايات الإلكترونية، والتي تشمل أجهزة الكمبيوتر والهواتف
              المحمولة والتلفزيونات والبطاريات وغيرها من المعدات الإلكترونية
              التي يتم التخلص منها بعد انتهاء عمرها الافتراضي.
            </p>
            <Button
              myClass="secondary-btn"
              children={
                <>
                  <CiRead  size={25}/>
                  قراءة المزيد
                </>
              }
            />
          </div>
        </motion.div>
        <motion.div
          className="box"
          // initial={{ opacity: 0, x: -100 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src="image/gallary/galary-3.png" alt="" />
          <div className="text">
            <h2>المقالة الثالثة</h2>
            <p>
              مع تطور التكنولوجيا السريع، أصبحت الأجهزة الإلكترونية جزءًا
              أساسيًا من حياتنا اليومية. لكن مع زيادة استخدامها، تزداد أيضًا
              مشكلة النفايات الإلكترونية، والتي تشمل أجهزة الكمبيوتر والهواتف
              المحمولة والتلفزيونات والبطاريات وغيرها من المعدات الإلكترونية
              التي يتم التخلص منها بعد انتهاء عمرها الافتراضي.
            </p>
            <Button
              myClass="main-btn"
              children={
                <>
                  <CiRead size={25} />
                  قراءة المزيد
                </>
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurNews;
