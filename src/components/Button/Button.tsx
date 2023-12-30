import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, color }: ButtonProps) => {
  return (
    <button className={[styles.btn, styles["btn-" + color]].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
