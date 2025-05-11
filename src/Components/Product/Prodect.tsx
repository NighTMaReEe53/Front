import { CiShoppingCart } from "react-icons/ci";
import Title from "../TitleMain/Title";
import "./product.css";
import { FaRegEye } from "react-icons/fa";

const Prodect = () => {
  const arr: [
    {
      id: number;
      src: string;
      name_product: string;
      desc: string;
      price: number;
    },
    {
      id: number;
      src: string;
      name_product: string;
      desc: string;
      price: number;
    },
    {
      id: number;
      src: string;
      name_product: string;
      desc: string;
      price: number;
    },
    {
      id: number;
      src: string;
      name_product: string;
      desc: string;
      price: number;
    }
  ] = [
    {
      id: 1,
      name_product: "المنتج الاول",
      desc: "انه منتج عالي المستوي وجذاب جدا نتمني ان يعجبك",
      price: 3000,
      src: "image/Product/product-1.png",
    },
    {
      id: 2,
      name_product: "المنتج الثاني",
      desc: "انه منتج عالي المستوي وجذاب جدا نتمني ان يعجبك",
      price: 2500,
      src: "image/Product/product-2.png",
    },
    {
      id: 3,
      name_product: "المنتج الثالث",
      desc: "انه منتج عالي المستوي وجذاب جدا نتمني ان يعجبك",
      price: 4000,
      src: "image/Product/product-3.png",
    },
    {
      id: 4,
      name_product: "المنتج الرابع",
      desc: "انه منتج عالي المستوي وجذاب جدا نتمني ان يعجبك",
      src: "image/Product/product-1.png",
      price: 6000,
    },
  ];

  const myProduct = arr.map((el) => {
    return (
      <div className="box" key={el.id}>
        <div className="image">
          <img src={el.src} alt="" />
        </div>
        <div className="text">
          <h2>{el.name_product}</h2>
          <p>{el.desc}</p>
          <span>
            السعر : <span>{el.price}</span> بدلا من{" "}
            <del>{el.price + el.price}</del>
          </span>
          <div className="btns">
            <button className="main-btn">
              اضافة الي <CiShoppingCart size={20} />
            </button>
            <button className="secondary-btn">
              {" "}
              التفاصيل <FaRegEye size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="our-product">
      <Title title="منتجاتنا" />
      <div className="container">{myProduct}</div>
    </div>
  );
};

export default Prodect;










