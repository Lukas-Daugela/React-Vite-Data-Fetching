import { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
  text: string;
  children?: ReactNode;
  func: Function;
  currentState?: boolean;
  type?: "sort" | "filter";
};

const Button = ({ text, children, currentState, func, type }: ButtonProps) => {
  const handleClick = () => {
    if (type === "sort") {
      return func(!currentState);
    }
    if (type === "filter") {
      return func();
    }
  };

  return (
    <button onClick={() => handleClick()} className="button">
      {children} {text}
    </button>
  );
};

export default Button;
