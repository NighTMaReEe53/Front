import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";


const DataFromLocal = window.localStorage.getItem("name");
const ParsingName = DataFromLocal ? JSON.parse(DataFromLocal) : null;

const Layout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  const Scroller = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 600) {
        ref.current?.classList.add("show");
      } else {
        ref.current?.classList.remove("show");
      }
    });
    ref.current?.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    Scroller();
  }, []);

  return (
    <>
      <Nav />
      <div className="to-up" ref={ref}>
        <i className="fa-solid fa-angle-up"></i>
      </div>
      {isLoading ? (
        <div className="light-overlay">
          <span className="loader"></span>
          {ParsingName && <h2>اهلا وسهلا ... <span>{ParsingName}</span></h2>}
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};

export default Layout;
