import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Nav from "../Components/Navbar/Nav";
import "../Styles/Login.css";
const Login = () => {
  return (
    <>
      <Nav />
      <div className="login">
        <img src="image/shape/shape-15.png" alt="" className="shape-login-1" />
        <img src="image/shape/shape-16.png" alt="" className="shape-login-2" />
        <img src="image/shape/shape-17.png" alt="" className="shape-login-3" />
        <img src="image/shape/shape-18.png" alt="" className="shape-login-4" />
        <span className="one"></span>
        <span className="two"></span>
        <div className="container">
          <div className="image">
            <img src="image/login.png" alt="" />
          </div>

          <div className="right">
            <h2>
              مرحبا بك في منصة{" "}
              <span>
                تدويري
                <img src="image/logo.png" alt="" />
              </span>
            </h2>
            <p>الرجاء تسجيل الدخول</p>
            <form>
              <input type="text" placeholder="الايميل الخاص بك" />
              <input type="password" placeholder="كلمة المرور الخاصة بك" />
              <Button children={"تسجيل الدخول"} myClass="main-btn" />
              <h2 className="register-link">
                ليس لديك حساب....
              <Link to={"/register"} >انشاء حساب ؟</Link>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
