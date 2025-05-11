import Title from "../TitleMain/Title";
import "./team.css";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className="team">
      <img src="image/shape/shape-11.png" className="team-shape" alt="" />
      <div className="middle-circle"></div>
      <div className="overlay-team"></div>
      <div className="container">
        <Title title="فريق العمل" />
        <div className="content">
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="image">
              <img src="image/team/girl-1.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>يارا</span> كمال
              </h2>
              <p>مسؤولة عن الموقع</p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="image">
              <img src="image/team/boy-1.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>مؤمن</span> محمد
              </h2>
              <p>مسؤول عن يو اي</p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="image">
              <img src="image/team/girl-2.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>ندي</span> محمد
              </h2>
              <p>مساعدة في الموقع </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="image">
              <img src="image/team/boy-2.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>ناصر</span> مسعد
              </h2>
              <p>مساعد في التصميم </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="image">
              <img src="image/team/girl-3.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>مريم</span> حبيش
              </h2>
              <p>مساعدة في التصميم </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="image">
              <img src="image/team/boy-3.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>محمود</span> فايق
              </h2>
              <p>مطور باك اند </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="image">
              <img src="image/team/girl-5.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>نادية</span> ابراهيم
              </h2>
              <p>مساعدة في التصميم </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="image">
              <img src="image/team/boy-5.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>محمد</span> وجيه
              </h2>
              <p>مساعد في الداتا </p>
            </div>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="image">
              <img src="image/team/boy-2.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>محمد</span> احمد
              </h2>
              <p>مساعد في الموقع </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="image">
              <img src="image/team/girl-3.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>مريم</span> حمدي
              </h2>
              <p>مطورة في باك اند </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="image">
              <img src="image/team/girl-4.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>نيرة</span> محمد
              </h2>
              <p>مساعدة في الداتا </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="image">
              <img src="image/team/boy-1.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>وليد</span> امين
              </h2>
              <p>مساعد في الداتا </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="image">
              <img src="image/team/boy-2.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>يحي</span> اكرامي
              </h2>
              <p>مساعد في الداتا </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="image">
              <img src="image/team/boy-3.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>محمد</span> صبحي
              </h2>
              <p>مطور باك اند </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="image">
              <img src="image/team/boy-1.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>يوسف</span> سامح
              </h2>
              <p>مساعد في الباك اند </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="image">
              <img src="image/team/girl-3.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>ندي</span> الدسوقي
              </h2>
              <p>مساعدة في التصميم </p>
            </div>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="image">
              <img src="image/team/boy-5.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>محمد</span> صالح
              </h2>
              <p>مساعد في الموقع </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="image">
              <img src="image/team/boy-2.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>مصطفي</span> محمود
              </h2>
              <p>مطور باك اند  </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="image">
              <img src="image/team/girl-4.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>وسام</span> محمد
              </h2>
              <p>مساعدة في التصميم </p>
            </div>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="image">
              <img src="image/team/girl-3.png" alt="Team" />
            </div>
            <div className="text">
              <h2>
                <span>منار</span> رمضان
              </h2>
              <p>مساعدة في الداتا </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
