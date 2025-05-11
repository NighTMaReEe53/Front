interface IError {
  title?: string;
}

const Error = ({ title }: IError) => {
  return <p className="error-message">{title}</p>;
};

export default Error;
