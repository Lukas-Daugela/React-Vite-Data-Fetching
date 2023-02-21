import { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
  text: string;
  children?: ReactNode;
  setState: Function;
  currentState?: boolean;
  type?: "sort" | "filter";
};

const Button = ({
  text,
  children,
  currentState,
  setState,
  type,
}: ButtonProps) => {
  const handleClick = () => {
    if (type === "sort") {
      return setState(!currentState);
    }
  };

  return (
    <button onClick={() => handleClick()} className="button">
      {children} {text}
    </button>
  );
};

export default Button;
