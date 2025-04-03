import { IoMdSend } from "react-icons/io";
import Button from "../Button";
import Title from "../TitleMain/Title";
import "./Contact.css";
import Animation from "../../../public/Animation/Contact.json";
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="cricle-left-small"></div>
      <img src="image/shape/shape-8.png" className="shape-contact-8" alt="" />
      <img src="image/shape/shape-7.png" className="shape-contact-7" alt="" />
      <img src="image/shape/shape-12.png" className="shape-contact-12" alt="" />
      <div className="overlay-contact"></div>
      <Title title="تواصل معانا" />
      <div className="container">
        <form action="">
          <input type="text" placeholder="ادخل اسمك..." />
          <input type="email" placeholder="ادخل الايميل الخاص بك..." />
          <textarea placeholder="ما هي الرسالة التي تحب ان ترسلها لنا ؟"></textarea>
          <Button
            children={
              <>
                <IoMdSend size={25} />
                <span>ارسال</span>
              </>
            }
            myClass="main-btn main-btn-option"
          />
        </form>
        <div className="image">
          {/* <img src="image/contact/contact.png" alt="" /> */}
          <Lottie animationData={Animation} loop={true} /> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
