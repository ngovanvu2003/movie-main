import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

const Box: FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
        fixed
        z-[99]
        bg-white
        h-fit 
        w-full
        bottom-0
        top-0
        right-0
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
