import React, { ReactNode } from "react";

type Heading1Props = {
  children: string | ReactNode;
};

export const Heading3 = ({ children, ...rest }: Heading1Props) => {
  return (
    <h3
      className={`font-staatliches text-2xl text-zinc-700 md:text-3xl font-extralight mb-2 ${rest}`}
    >
      {children}
    </h3>
  );
};
