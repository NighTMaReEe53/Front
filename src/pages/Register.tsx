import { Link } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import "../Styles/Register.css";

const Register = () => {
  return (
    <>
      <Nav />
      <div className="register">
        <img
          src="image/shape/shape-16.png"
          className="shape-register-1"
          alt=""
        />
        <img
          src="image/shape/shape-12.png"
          className="shape-register-2"
          alt=""
        />
        <img
          src="image/shape/shape-11.png"
          className="shape-register-3"
          alt=""
        />
        <img
          src="image/shape/shape-18.png"
          className="shape-register-4"
          alt=""
        />
        <div className="one"></div>
        <div className="container">
          <form>
            <h2 className="form-title">
              مرحبا بك في منصة{" "}
              <span>
                تدويري
                <img src="image/logo.png" alt="" />
              </span>
            </h2>
            <span>
              انشاء حساب للاستفادة من خدامتنا
            </span>
            <input type="text" placeholder="ما هو اسمك..." />
            <input type="email" placeholder="الايميل الخاص بك" />
            <input type="password" placeholder="الباسورد خاص بك" />
            <button className="secondary-btn">انشأء حساب</button>
            <h2>
              لديك حساب... <Link to={"/login"}> تسجيل الدخول </Link>
            </h2>
          </form>
          <div className="image">
            <img src="image/register.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
