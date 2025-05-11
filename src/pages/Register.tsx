import { Link, useNavigate } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import "../Styles/Register.css";
import { motion } from "framer-motion";
import { INPUT_REGISTER } from "../Data/Index";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Registerschema } from "../Validation/Index";
import { Fragment } from "react/jsx-runtime";
import Error from "../Components/Error/Index";
import { useState } from "react";
import { AxiosInstance } from "../Config/Axios";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import Animation from "../../public/Animation/Register.json";
// import { AxiosError } from "axios";

export interface IError {
  error: {
    message: string;
  };
}

interface Inputs {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState<boolean>(false);

  // Start Schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(Registerschema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setLoading(true);
    try {
      const { status } = await AxiosInstance.post("auth/local/register", data);
      if (status == 200) {
        toast.success("  تم انشاء الحساب بنجاح تشرفنا بتسجيلك لدينا", {
          duration: 8000,
          position: "top-left",
        });
        setTimeout(() => {
          navigate("/login");
        }, 80000);
      }
    } catch {
      // const TheError = error as AxiosError<IError>;
      toast.error(`الاسم او الايميل موجود بالفعل لدينا...`, {
        duration: 2000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  // Get Input
  const INPUTS = INPUT_REGISTER.map((Input, i) => {
    return (
      <Fragment key={i}>
        <motion.input
          {...register(Input.name)}
          type={Input.type}
          placeholder={Input.label}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: i - 0.7 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
        <Error title={errors[Input.name]?.message} />
      </Fragment>
    );
  });

  return (
    <>
      <Nav />
      <div className="register">
        <div className="spikes-register"></div>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.h2
              className="form-title"
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
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              انشاء حساب للاستفادة من خدامتنا
            </motion.span>
            {INPUTS}
            <motion.button
              className={`secondary-btn ${isLoading && "not-click"}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              انشأء حساب
              {isLoading && <div className="loading"></div>}
            </motion.button>
            <motion.h2
              transition={{ duration: 0.5, delay: 0.8 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              لديك حساب... <Link to={"/login"}> تسجيل الدخول </Link>
            </motion.h2>
          </form>
          <div className="image">
            <Lottie animationData={Animation} loop={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
