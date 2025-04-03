import "./overlay.modules.css";

interface IText {
  text: string;
}

const CircleBlur = ({text}: IText) => {
  return <div className={`overlay-circle-${text}`}></div>;
};

export default CircleBlur;
