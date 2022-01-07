import React, { ReactNode } from "react";
import classNames from "classnames";

type Heading1Props = {
  children: string | ReactNode;
  className?: string;
};

export const Heading1 = ({ children, className, ...rest }: Heading1Props) => {
  return (
    <h1
      className={`font-staatliches text-5xl sm:text-6xl text-zinc-700 font-extralight my-4 ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </h1>
  );
};
