"use client";
import { embedMovie } from "@/api/constants";
import React from "react";

interface Props {
  link: number | string;
}
const Iframe = ({ link }: Props) => {
  return (
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={embedMovie(link)}
      title=""
      frameBorder="0"
      allowFullScreen
      loading="eager"
    ></iframe>
  );
};

export default Iframe;
