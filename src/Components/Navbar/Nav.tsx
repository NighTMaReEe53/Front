import { Link } from "react-router-dom";
import Links from "./Links";
import "./nav.modules.css";
import { useRef, useState } from "react";

const Nav = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [isTrue, setTrue] = useState<true | false>(false);

  // Function Handle Menu

  const handleMenu = () => {
    ref.current?.classList.toggle("clicked");
    setTrue(!isTrue);
  };

  return (
    <nav className="nav">
      <div className={`overlay ${isTrue ? "show" : ""}`}></div>
      <div className="container">
        <Link to={"/"} className="logo_item">
          <img src="image/logo.png" className="logo" alt="" />
          <h2>تدوي<span>ري</span></h2>
        </Link>
        <Links check={isTrue} />
        <div className="menu" onClick={handleMenu} ref={ref}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
