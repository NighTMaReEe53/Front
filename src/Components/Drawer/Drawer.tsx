import { ReactNode } from "react";

interface IText {
  children: ReactNode;
}

const Drawer = ({ children }: IText) => {
  return (
    <div className="drawer">
      <div className="container">{children}</div>
    </div>
  );
};

export default Drawer;
