import { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
  text: string;
  children?: ReactNode;
  onClick: Function;
  currentState?: boolean;
  type?: "sort";
};

const Button = ({
  text,
  children,
  currentState,
  onClick,
  type,
}: ButtonProps) => {
  const handleClick = () => {
    if (type === "sort") {
      return onClick(!currentState);
    } else return onClick();
  };

  return (
    <button onClick={() => handleClick()} className="button">
      {children} {text}
    </button>
  );
};

export default Button;
