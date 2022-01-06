import React, { ReactNode } from "react";
import classNames from "classnames";

type Heading1Props = {
  children: string | ReactNode;
  className?: string;
};

export const Heading1 = ({ children, className, ...rest }: Heading1Props) => {
  return (
    <h1
      className={classNames(
        `text-3xl text-zinc-700 md:text-4xl font-extralight my-4 ${
          className || ""
        }`
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};
