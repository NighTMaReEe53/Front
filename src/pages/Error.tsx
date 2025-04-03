import { Link } from "react-router-dom";
import CircleBlur from "../Components/overlay/CircleBlur";


const Error = () => {
  return (
    <>
      <div className="error-app">
      <CircleBlur text="left" />
      <img src="image/shape/shape-12.png" className="shape-error-1" alt="" />
      <img src="image/shape/shape-2.png" className="shape-error-2" alt="" />
      <img src="image/shape/shape-8.png" className="shape-error-8" alt="" />
        <img src="SVG/Error.svg" className="error" />
        <h2 className="text">خطاء هذه الصفحة ليست موجودة بالفعل</h2>
        <Link to={"/"} className="btn-error">الرجوع الي الصفحة الرئيسية</Link>
      </div>
    </>
  );
};

export default Error;
