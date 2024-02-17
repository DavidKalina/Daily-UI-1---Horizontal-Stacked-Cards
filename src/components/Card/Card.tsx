import { motion, useAnimation } from "framer-motion";
import "./styles.css";

interface CardProps {
  order: number;
  children: React.ReactNode | React.ReactNode[];
}

export const Card = ({ order, children }: CardProps) => {
  const controls = useAnimation();
  return (
    <motion.div
      className="card"
      initial={{ scale: 1, rotate: 45 }}
      animate={controls}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      onMouseEnter={() => controls.start({ translateY: -20 })} // Using translateY for vertical movement
      onMouseLeave={() => controls.start({ translateY: 0 })}
      transition={{ type: "tween", duration: 0.2 }}
      style={{ zIndex: order }}
    >
      {children}
    </motion.div>
  );
};
