interface ITitle {
  title: string;
  isTrue?: boolean;
}

const Title = ({ title, isTrue }: ITitle) => {
  return (
    <div className="main">
      <span className="second">{title}</span>
      <h2 className={`main-title ${isTrue ? "show" : ""}`}>
        <span>{title}</span>
      </h2>
    </div>
  );
};

export default Title;
