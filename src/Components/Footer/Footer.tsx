import { Link } from "react-router-dom";
import "./Footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import { BiCode } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="spikes"></div>
      <div className="container">
        <div className="content-footer">
          <div className="box">
            <Link to={"/"}>
              <h2>
                منصة <span>تدويري</span>
              </h2>
              <img src="image/logo.png" alt="" />
            </Link>
            <p>
              نحن نرحب بكم في عالمنا الخاص , ونحن نعمل علي تلبية احتياجات العميل
              بأفضل الطرق الممكنة يسعدنا ويشرفنا بكم زيارتنا عبرة الموقع
            </p>
          </div>
          <div className="links-footer">
            <ul>
              <li>
                <Link to={"/"}>الصفحة الرئيسية</Link>
              </li>
              <li>
                <Link to={"/about"}>ماذا عنا</Link>
              </li>
              <li>
                <Link to={"/services"}>خدامتنا</Link>
              </li>
              <li>
                <Link to={"/contact"}>تواصل معانا</Link>
              </li>
            </ul>
          </div>

          <div className="social">
            <h2>ايضا يمكن التواصل لنا عبر </h2>
            <div className="icons">
              <div className="icon">
                <Link
                  to={"https://www.facebook.com/profile.php?id=100087214745599"}
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </div>
              <div className="icon">
                <Link
                  target="_blank"
                  to={
                    "https://chat.whatsapp.com/I91R9DQPHZsAvVV4LTjBJW?fbclid=IwY2xjawI6_9VleHRuA2FlbQIxMAABHa-Pqy82w00Y2zly9DWLRZgtftoZDWU-9hqrJ2Nth6g569jACOSv5edZ0g_aem_UUA_NNITlqlEiksbGmi2-g"
                  }
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
              <div className="icon">
                <Link to={"https://t.me/abdubaabbad"} target="_blank">
                  <FaTelegramPlane size={30} />
                </Link>
              </div>
              <div className="icon">
                <Link
                  to={
                    "https://www.instagram.com/recyclingmarasi/?igsh=YWw2a21xOWc1NHVw&fbclid=IwY2xjawJoRjNleHRuA2FlbQIxMAABHlA3KLIUSqlYWtSpumnanEjcrGDq-R2NeQs2Uh58plDR6velu78EFmsptg_F_aem_fQDFyF-NuJ6DpFAWfIOO3A#"
                  }
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
              <div className="icon">
                <Link
                  to={
                    "https://www.linkedin.com/company/tadweersaudi/posts/?feedView=all&viewAsMember=true"
                  }
                >
                  <i className="fa-brands fa-linkedin-in"></i>{" "}
                </Link>
              </div>
            </div>
            <div className="map">
              <div style={{ position: "relative" }}>
                <div>
                  <iframe
                    loading="lazy"
                    src="https://maps.google.com/maps?q=Mit+Ghamr&output=embed"
                  ></iframe>
                </div>
                <a
                  href="https://mapembeds.com"
                  rel="noopener"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className=" copyright">
          {" "}
          تم الانشاء بواسطة{" "}
          <span>
            تيم <BiCode size={30} />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;