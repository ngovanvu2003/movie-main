"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "../../typings";
import { baseUrl } from "@/api/constants";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";

type Props = {
  netflixOriginals: Movie[] | any;
};

const Banner = ({ netflixOriginals }: Props) => {
  const data = netflixOriginals.results;
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(data[Math.floor(Math.random() * data.length)]);
  }, [data]);
  
  return (
    <div className=" flex flex-col space-x-2 py-16 md:space-y-4 md:h-[65vh] lg:justify-end">
      {/* Banner */}
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <img
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path} `}
          alt={"Picture of the author"}
          // layout="fill"
          // objectFit="cover"
        />
      </div>
      <h1 className=" text-2xl  lg:text-7xl md:text-4xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xl text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-4">
        <button className="buttonBanner bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Xem ngay
        </button>
        <button className="buttonBanner bg-[gray]/70 text-black">
          {" "}
          <GrCircleInformation className="h-5 w-5 text-black md:h-8 md:w-8" />{" "}
          Xem thông tin
        </button>
      </div>

      {/* <div className=" justify-center items-center hidden md:flex min-w-[300px]">
          <Image
            className="z-10 w-[300px] rounded-xl"
            src={`${baseUrl}${movie?.poster_path} `}
            width={300}
            height={200}
            alt=""
          />
        </div> */}
    </div>
  );
};

export default Banner;
