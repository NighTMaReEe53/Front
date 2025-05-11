import { Link } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import "../Styles/Login.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosInstance } from "../Config/Axios";
import toast from "react-hot-toast";
import { Loginschema } from "../Validation/Index";
import Error from "../Components/Error/Index";
import Lottie from "lottie-react";
import Animation from "../../public/Animation/Login.json"

interface Inputs {
  identifier: string;
  password: string;
}

const Login = () => {
  const [isLoading, setLoading] = useState<boolean>(false);


  // Start Schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(Loginschema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setLoading(true);
    try {
      const { data: theInfo, status } = await AxiosInstance.post(
        "auth/local",
        data
      );
      window.localStorage.setItem("jwt", JSON.stringify(theInfo?.jwt));
      window.localStorage.setItem("name", JSON.stringify(theInfo?.user?.username));
      window.localStorage.setItem("email", JSON.stringify(theInfo?.user?.email));
      window.localStorage.setItem("user", JSON.stringify(theInfo));
      console.log(theInfo)
      if (status == 200) {
        toast.success("  تم تسجيل الدخول بنجاح سيتم تحويلك لصفحة الرئيسية ", {
          duration: 8500,
          position: "top-left",
        });
        setTimeout(() => {
          window.location.replace("/")
        }, 8500);
      }
    } catch {
      toast.error(`هناك مشكلة الحساب الذي ادخلته غير صحيح`, {
        duration: 2000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="login">
        <div className="spikes-login"></div>

        <img src="image/shape/shape-15.png" alt="" className="shape-login-1" />
        <img src="image/shape/shape-16.png" alt="" className="shape-login-2" />
        <img src="image/shape/shape-17.png" alt="" className="shape-login-3" />
        <img src="image/shape/shape-18.png" alt="" className="shape-login-4" />
        <span className="one"></span>
        <span className="two"></span>
        <div className="container">
          <div className="image">
          <Lottie animationData={Animation} loop={true} /> 
          </div>

          <div className="right">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              مرحبا بك في منصة{" "}
              <span>
                تدويري
                <img src="image/logo.png" alt="" />
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              الرجاء تسجيل الدخول
            </motion.p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <motion.input
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                type="text"
                {...register("identifier")}
                placeholder="الايميل الخاص بك"
              />
              {<Error title={errors["identifier"]?.message} />}
              <motion.input
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                type="password"
                {...register("password")}
                placeholder="كلمة المرور الخاصة بك"
              />
              {<Error title={errors["password"]?.message} />}

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`main-btn ${isLoading && "not-click"}`}
              >
                تسجيل الدخول
                {isLoading && <div className="loading"></div>}
              </motion.button>
              <motion.h2
                transition={{ duration: 0.5, delay: 0.8 }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="register-link"
              >
                ليس لديك حساب....
                <Link to={"/register"}>انشاء حساب ؟</Link>
              </motion.h2>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
