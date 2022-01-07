import React, { ReactNode } from "react";

type Heading1Props = {
  children: string | ReactNode;
  className?: string;
};

export const Heading2 = ({ children, className, ...rest }: Heading1Props) => {
  return (
    <h2
      className={`font-staatliches text-3xl text-zinc-700 sm:text-4xl font-extralight mb-2 ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </h2>
  );
};
