import { CiDeliveryTruck, CiSettings, CiUser } from "react-icons/ci";
import Title from "../TitleMain/Title";
import "./Serv.css";
import { TbSettingsHeart } from "react-icons/tb";
import CircleBlur from "../overlay/CircleBlur";

const ServiceS = () => {













  return (
    <div className="services">
      <img src="image/shape/shape-7.png" className="shape-services-1" alt="" />
      <img src="image/shape/shape-11.png" className="shape-services-2" alt="" />
      <CircleBlur text="right" />
      <Title title="خدامتنا" isTrue={false} />
      <div className="container">
        <div className="box">
          <CiDeliveryTruck size={40} color="#FFF" />
          <h2>خدمات التوصيل</h2>
          <p>
            لدينا سرعة توصيل علي اعلي مستوي مهما كان الموقع سوف نصل الي العميل
            في اقرب وقت
          </p>
        </div>
        <div className="box">
          <CiUser size={40} color="#FFF" />
          <h2>خدمات العميل</h2>
          <p>
            لدينا قسم متخصص علي اكمل واجه في تلبية احتياجات العميل والرد علي
            استفسارات العملاء
          </p>
        </div>
        <div className="box">
          <TbSettingsHeart size={40} color="#FFF" />
          <h2>خدمات ما بعد البيع</h2>
          <p>
            الامر ليس مقتصر فقط علي ان نؤدي للعميل الخدمة في اول معاملة فقط انما
            نتعامل معاه بعد ذالك
          </p>
        </div>
        <div className="box">
          <CiSettings size={40} color="#FFF" />
          <h2>خدمات الصيانة</h2>
          <p>
            لدينا قسم متخصص في حل المشاكل وحل اذ كان هناك عطلات فنية وكذالك
            العمل علي الرد السريع{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceS;




