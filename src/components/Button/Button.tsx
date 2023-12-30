import { ReactNode } from "react";
import styles from "./Button.module.css";
import { useState } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onButtonClick: () => void;
}

const Button = ({ children, color, onButtonClick }: ButtonProps) => {
  return (
    <button className={[styles.btn, styles["btn-" + color]].join(" ")} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
