import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  onClickButton: () => void;
}

const Button = ({
  children,
  color = "primary",
  onClickButton,
}: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
