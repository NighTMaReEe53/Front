import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

interface ILinks {
  check: boolean;
}

const theStorage = window.localStorage.getItem("jwt");
const theStorageName = window.localStorage.getItem("name");
const theStorageEmail = window.localStorage.getItem("email");

const Parsing = theStorage ? JSON.parse(theStorage) : null;
const ParsingName = theStorageName ? JSON.parse(theStorageName) : null;
const ParsingEmail = theStorageEmail ? JSON.parse(theStorageEmail) : null;

const Links = ({ check }: ILinks) => {
  const [name, setName] = useState<
    "home" | "about" | "services" | "contact" | string
  >("home");

  const [isTrue, setIsTrue] = useState<boolean>(false);

  const handleClicked = () => {
    setIsTrue(!isTrue);
  };

  const myHref = window.location.href.split("/")[3];

  useEffect(() => {
    setName(myHref);
  }, [window.location.href]);

  const handleOut = () => {
    window.localStorage.clear();

    toast.success("تم تسجيل عملية الخروج بنجاح", {
      duration: 1500,
      position: "top-center",
    });

    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  return (
    <>
      <ul className={`Links ${check ? "active" : ""}`}>
        <Link
          to={"/"}
          className={`nav-link ${
            name == "home" || name == "" ? "active" : ""
          } `}
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
        {ParsingName && (
          <Link
            to={"/add-product"}
            className={`nav-link ${name == "add-product" ? "active" : ""} `}
            onClick={() => setName("add-product")}
          >
            أضافة
          </Link>
        )}
        <Link
          to={"/team"}
          className={`nav-link ${name == "team" ? "active" : ""} `}
          onClick={() => setName("team")}
        >
          فريقنا
        </Link>
        <Link
          to={"/contact"}
          className={`nav-link ${name == "contact" ? "active" : ""} `}
          onClick={() => setName("contact")}
        >
          تواصل معانا
        </Link>
        {Parsing ? (
          <li>
            <div className="image" onClick={handleClicked}>
              <img src="image/avatar.png" alt="" />
            </div>
          </li>
        ) : (
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
        )}
        {isTrue && (
          <div className="light-box">
            <h2>
              الاسم : <span>{ParsingName}</span>
            </h2>
            <h3>
              الايميل الخاص بك : <span>{ParsingEmail}</span>
            </h3>
            <button className="logout" onClick={handleOut}>
              تسجيل الخروج
            </button>
          </div>
        )}
      </ul>
    </>
  );
};

export default Links;
