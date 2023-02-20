import { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
  text: string;
  children?: ReactNode;
};

const Button = ({ text, children }: ButtonProps) => {
  return (
    <button className="button">
      {children} {text}
    </button>
  );
};

export default Button;
