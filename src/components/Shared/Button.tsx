import { HTMLProps } from "react";
import type { NextPage } from "next";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: NextPage<ButtonProps & HTMLProps<HTMLButtonElement>> = ({
  className,
  ...others
}) => {
  return <button {...others} className={` ${className}`}></button>;
};

export default Button;
