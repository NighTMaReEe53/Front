import { useEffect, useState } from "react";
import Title from "../Components/TitleMain/Title";
import "../Styles/Product.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosInstance } from "../Config/Axios";
import toast from "react-hot-toast";
import { Up_Product } from "../Validation/Index";
import Error from "../Components/Error/Index";

interface Inputs {
  title: string;
  description: string;
  price: string;
  image: string;
}

interface IProduct {
  id: number;
  attributes: {
    title: string;
    description: string;
    price: string;
    image: string;
    user?: {
      data: {
        attributes?: {
          email?: string;
          username?: string;
        };
      };
    };
  };
}

const ProducT = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct[]>([]);
  const [increment, setIncrement] = useState<number>(0);

  const getUserFromLocal = window.localStorage.getItem("user");

  const parsingUser = getUserFromLocal ? JSON.parse(getUserFromLocal) : null;

  const getData = async () => {
    const { data } = await AxiosInstance.get("products?populate=*", {
      headers: {
        Authorization: `Bearer ${parsingUser.jwt}`,
      },
    });
    setProduct(data.data);
  };

  useEffect(() => {
    getData();
  }, [increment]);

  const myProduct = product.map((product) => {
    return (
      <div className="box" key={product.id}>
        <div className="image">
          <img src={product?.attributes?.image} alt="" />
        </div>
        <div className="text">
          <h2>
            اسم المنتج : <span>{product?.attributes?.title}</span>
          </h2>
          <p>وصف المنتج : {product?.attributes?.description}</p>
          <span>
            سعر المنتج :{" "}
            <span className="price">{product.attributes.price}</span> بدلا من{" "}
            <del>{product.attributes.price + product.attributes.price}</del>
          </span>
          <h3 className="copyright-user">
            تم الرفع بواسطة{" "}
            <span>{product.attributes.user?.data.attributes?.username}</span>
          </h3>
        </div>
      </div>
    );
  });

  // Start Schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(Up_Product),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setIsLoading(true);
    try {
      const { status } = await AxiosInstance.post(
        "products",
        {
          data: {
            title: data.title,
            description: data.description,
            price: data.price,
            image: data.image,
            user: [parsingUser.user.id],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${parsingUser.jwt}`,
          },
        }
      );
      if (status == 200) {
        toast.success("لقد تم اضافة المنتج بنجاح", {
          duration: 1500,
          position: "top-left",
        });
        data.title = "";
        data.description = "";
        data.image = "";
        data.price = "";
        setShow(false);
        setIncrement(() => increment + 1);
      }
    } catch {
      toast.error("هناك مشكلة في وقت الحالي قعد المحاولة", {
        duration: 1500,
        position: "top-left",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="product-page">
      <Title title="رفع المنتج الخاص بك" />
      <div className="container">
        <div className="box box-height">
          <div className="icon" onClick={() => setShow(true)}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        {myProduct}
      </div>
      {show && (
        <div className="light-box-product">
          <i
            className="fa-solid fa-xmark close"
            onClick={() => setShow(false)}
          ></i>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box">
              <h2>اسم المنتج الخاص بك</h2>
              <input
                {...register("title")}
                type="text"
                placeholder="ادخل اسم المنتج هنا"
              />
              <Error title={errors["title"]?.message} />
              <p>وصف للمنتج الخاص بك</p>
              <input
                type="text"
                {...register("description")}
                placeholder="ادخل وصف المنتج هنا"
              />
              <Error title={errors["description"]?.message} />

              <p>صورة للمنتج الخاص بك</p>
              <input
                type="text"
                placeholder="ادخل لينك الصورة هنا"
                {...register("image")}
              />

              <Error title={errors["image"]?.message} />

              <p>السعر الذي تريد بيع المنتج به</p>
              <input
                type="number"
                placeholder="ادخل السعر هنا"
                {...register("price")}
              />
              <Error title={errors["price"]?.message} />

              <button className="main-btn">
                رفع المنتج
                {isLoading && <div className="loading"></div>}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProducT;
