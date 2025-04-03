import Title from "../TitleMain/Title";
import "../../Styles/About.css";
import { BiCheckDouble } from "react-icons/bi";
import CircleBlur from "../overlay/CircleBlur";

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
              <h2 className="main">
                نحن منصة <span>تدويري</span>
              </h2>
              <p>
                قائمين علي اعادة تدوير النفايات بطريقة الكترونية وبأحدث الطرق
                المستخدمة لتلبية احتياجات العميل بكل ما هو جديد
              </p>
              <h2 className="secondary">
                بعض ما يميز منصة <span>تدويري</span> :-
              </h2>
              <div className="star">
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>حسن التعامل مع العميل</span>
              </div>
              <div className="star">
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>القيأم بعمليات التدوير بطريقة الكترونية</span>
              </div>
              <div className="star">
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>سرعة توصيل وعلي اعلي مستوي</span>
              </div>
              <div className="star">
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>خدمة 24 ساعة</span>
              </div>
              <div className="star">
                <BiCheckDouble size={30} color="#5dd7a4" />
                <span>تقديم اقتراحات</span>
              </div>
            </div>
            <div className="image">
              <img src="image/about.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbouT;
