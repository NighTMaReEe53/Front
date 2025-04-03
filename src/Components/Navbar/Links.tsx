import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ILinks {
  check: boolean;
}

const Links = ({ check }: ILinks) => {
  const [name, setName] = useState<
    "home" | "about" | "services" | "contact" | string
  >("home");

  const myHref = window.location.href.split("/")[3];

  useEffect(() => {
    setName(myHref);
  }, [window.location.href]);

  return (
    <ul className={`Links ${check ? "active" : ""}`}>
      <Link
        to={"/"}
        className={`nav-link ${name == "home" || name == "" ? "active" : ""} `}
        onClick={() => setName("home")}
      >
        الصفحة الرئيسية
      </Link>
      <Link
        to={"/about"}
        className={`nav-link ${name == "about" ? "active" : ""} `}
        onClick={() => setName("about")}
      >
        ماذا عنا
      </Link>
      <Link
        to={"/services"}
        className={`nav-link ${name == "services" ? "active" : ""} `}
        onClick={() => setName("services")}
      >
        خدامتنا
      </Link>
      <Link
        to={"/contact"}
        className={`nav-link ${name == "contact" ? "active" : ""} `}
        onClick={() => setName("contact")}
      >
        تواصل معانا
      </Link>
      <li>
        <div className="btns">
          <Link to={"/login"} className="main-btn">
            تسجيل دخول
          </Link>
          <Link to={"/register"} className="secondary-btn">
            انشاء حساب
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default Links;
