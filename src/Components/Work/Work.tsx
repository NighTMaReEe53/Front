import { FaHeart, FaPhoneAlt, FaUser } from "react-icons/fa";
import Title from "../TitleMain/Title";
import "./Work.css";
import { RiMenuAddLine } from "react-icons/ri";

const Work = () => {
  return (
    <div className="work">
      <img src="image/shape/shape-1.png" className="work-shape-1" alt="" />
      <img src="image/shape/shape-12.png" className="work-shape-2" alt="" />
      <Title title="كيف تعمل منصة تدويري" />
      <div className="container">
        <div className="box">
          <div className="icon">
            <FaUser size={40} color="#FFF" />
          </div>
          <div className="text">
            <span>1</span>
            <h2>سجل في المنصة</h2>
            <p>انشئ حسابك بسهولة وابداء رحلتك في اعادة التدوير</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <RiMenuAddLine size={40} color="#FFF" />
          </div>
          <div className="text">
            <span>2</span>
            <h2>اختر الخدمة المناسبة</h2>
            <p>سواء كنت ترغب في بيع نفاياتك او اصلاح الاجهزة او التبرع بها</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <FaPhoneAlt size={40} color="#FFF" />
          </div>
          <div className="text">
            <span>3</span>
            <h2>تواصل معانا</h2>
            <p>حدد موعدا لجمع النفايات او تقديم خدمات المطلوبة</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <FaHeart size={40} color="#FFF" />
          </div>
          <div className="text">
            <span>4</span>
            <h2>ساهم في بيئة مستدامة</h2>
            <p>تضمن اعادة تدوير امنة ومسؤولة لكل المواد</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
