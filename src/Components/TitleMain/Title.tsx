interface ITitle {
  title: string;
  isTrue?: boolean;
}
import { motion } from "framer-motion";

const Title = ({ title, isTrue }: ITitle) => {
  return (
    <div className="main">
      <motion.span
        // initial={{ x: -20, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.5, delay: 0.3 }}
        className="second"
      >
        {title}
      </motion.span>
      <motion.h2
        // initial={{ x: 20, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.5, delay: 0.5 }}
        className={`main-title ${isTrue ? "show" : ""}`}
      >
        <span>{title}</span>
      </motion.h2>
    </div>
  );
};

export default Title;
