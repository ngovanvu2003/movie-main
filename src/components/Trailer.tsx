import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { LuPlay } from "react-icons/lu";

type Props = {
  href: string;
};

const Trailer: FC<Props> = ({ href }) => {
  return (
    <Link
      href="ádas"
      className="
      relative
      group
      transition
      hover:scale-110
    "
    >
      <button className="relative min-w-[150px] min-h-[75px]">
        <Image
          src={href}
          alt="trailer image"
          width={300}
          height={0}
          className="z-10 w-[300px] rounded-xl"
        />
      </button>
      <div
        className="
          absolute 
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-[#d81f26]
          p-2
          drop-shadow-md 
          bottom-4
          right-4
          group-hover:opacity-100 
        "
      >
        <LuPlay size={12} />
      </div>
    </Link>
  );
};

export default Trailer;
