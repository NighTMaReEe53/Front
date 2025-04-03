import { ReactNode } from "react";

interface IBtn {
  children: ReactNode;
  myClass?: string;
}

const Button = ({ children, myClass }: IBtn) => {
  return <button className={`${myClass}`}>{children}</button>;
};

export default Button;
