import Title from "../TitleMain/Title";
import { IoIosStar } from "react-icons/io";
import "./News.css";
import { HiHeart } from "react-icons/hi";
import { motion } from "framer-motion";

const News = () => {
  return (
    <div className="news">
      <img src="image/shape/shape-13.png" className="shape-new-1" alt="" />
      <img src="image/news.png" className="shape-new-4" alt="" />
      <img src="image/shape/shape-14.png" className="shape-new-2" alt="" />
      <img src="image/shape/shape-3.png" className="shape-new-3" alt="" />
      <Title title="أراء العملاء" />
      <div className="container">
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="stars">
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
          </div>
          <div className="text">
            <blockquote>
              ` تجربة رائعة وكذالك سرعة في الخدمة ودعم فني متميز `
            </blockquote>
            <div className="info">
              <img src="image/team/boy-1.png" alt="" />
              <h2>محمد علي</h2>
              <span className="heart">
                <HiHeart color="#f05" size={30} />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="stars">
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
          </div>
          <div className="text">
            <blockquote>
              ` تجربة رائعة وكذالك سرعة في الخدمة ودعم فني متميز `
            </blockquote>
            <div className="info">
              <img src="image/team/girl-1.png" alt="" />
              <h2>سارة احمد</h2>
              <span className="heart">
                <HiHeart color="#f05" size={30} />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="stars">
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
            <IoIosStar color="#ffc107" size={30} />
          </div>
          <div className="text">
            <blockquote>
              ` تجربة رائعة وكذالك سرعة في الخدمة ودعم فني متميز `
            </blockquote>
            <div className="info">
              <img src="image/team/boy-1.png" alt="" />
              <h2>محمد يوسف</h2>
              <span className="heart">
                <HiHeart color="#f05" size={30} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;






