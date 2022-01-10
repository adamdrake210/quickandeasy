import { ReactNode } from "react";

type ButtonProps = {
  btnText: string | ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  btnText,
  onClick,
  color,
  className,
  type,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        color === "primary"
          ? "bg-green-700 hover:bg-green-800 text-white"
          : "bg-white hover:bg-gray-100 text-green-800"
      } font-bold text-2xl py-2 px-4 rounded disabled:bg-slate-400 uppercase ${className}`}
      disabled={disabled}
      {...rest}
    >
      {btnText}
    </button>
  );
};
