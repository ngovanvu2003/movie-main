import Image from "next/image";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  image: string;
};

const Backdrop: FC<Props> = ({ className, image }) => {
  return (
    <Image
      src={image}
      alt="backdrop of film"
      fill
      objectFit="cover"
      style={{
        transition: "all 0.3s ease 0s",
        opacity: 0.6,
      }}
      className={twMerge(`w-[100%] h-[100%] object-cover`, className)}
    />
  );
};

export default Backdrop;
