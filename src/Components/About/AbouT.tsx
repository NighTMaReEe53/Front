import Title from "../TitleMain/Title";
import "../../Styles/About.css";
import { BiCheckDouble } from "react-icons/bi";
import CircleBlur from "../overlay/CircleBlur";

import { motion } from "framer-motion";

const AbouT = () => {
  return (
    <>
      <div className="about">
        <img src="image/shape/shape-9.png" className="shape-about-1" alt="" />
        <img src="image/shape/shape-12.png" className="shape-about-2" alt="" />

        <CircleBlur text="left" />
        <div className="container">
          <Title title="ماذا عنا" />
          <div className="content">
            <div className="text">
              <motion.h2
                className="main"
                // initial={{ opacity: 0, y: -20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: 0.2 }}
              >
                نحن منصة <span>تدويري</span>
              </motion.h2>
              <motion.p
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: 0.2 }}
              >
                قائمين علي اعادة تدوير النفايات بطريقة الكترونية وبأحدث الطرق
                المستخدمة لتلبية احتياجات العميل بكل ما هو جديد
              </motion.p>
              <h2 className="secondary">
                بعض ما يميز منصة <span>تدويري</span> :-
              </h2>
              <motion.div
                className="star"
                // initial={{ opacity: 0, x: 20 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: 0.5 }}
              >
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>حسن التعامل مع العميل</span>
              </motion.div>
              <motion.div
                className="star"
                // initial={{ opacity: 0, x: 20 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: 0.5 }}
              >
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>القيام بعمليات التدوير بطريقة الكترونية</span>
              </motion.div>
              <motion.div
                className="star"
                // initial={{ opacity: 0, x: 20 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: 0.6 }}
              >
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>سرعة توصيل وعلي اعلي مستوي</span>
              </motion.div>
              <motion.div
                className="star"
                // initial={{ opacity: 0, x: 20 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: 0.7 }}
              >
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>خدمة 24 ساعة</span>
              </motion.div>
              <motion.div
                className="star"
                // initial={{ opacity: 0, x: 20 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: 0.8 }}
              >
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>تقديم اقتراحات</span>
              </motion.div>
            </div>
            <motion.div className="image">
              <motion.img
                src="image/about.png"
                alt=""
                // initial={{ opacity: 0, x: -50 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbouT;