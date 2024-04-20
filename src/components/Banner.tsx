"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "../../typings";
import { baseUrl } from "@/api/constants";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import Link from "next/link";
import Trailer from "./Trailer";

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
    <div className="flex">
      <div className=" flex flex-1  flex-col gap-4 space-x-2 py-16 md:space-y-4 md:h-[100vh] lg:justify-center">
        {/* Banner */}
        <div className="absolute top-0 left-0 h-[100vh] -z-10 w-full">
          <Image
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path} `}
            alt={"Picture of the author"}
            fill
            objectFit="cover"
            style={{
              transition: "all 0.3s ease 0s",
              opacity: 0.5,
            }}
          />
        </div>
        <h1 className=" text-2xl  lg:text-6xl md:text-4xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xl text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
          {movie?.overview}
        </p>
        <div className="flex space-x-4">
          <Link href={`/watch/${movie?.id}`}>
            <button className="buttonBanner bg-white text-black">
              <FaPlay className="h-3 w-3 text-black md:h-4 md:w-4" />
              Xem ngay
            </button>
          </Link>
          <Link href={`/movies/${movie?.id}`}>
            <button className="buttonBanner bg-[gray]/70 text-black">
              {" "}
              <GrCircleInformation className="h-3 w-3 text-black md:h-4 md:w-4" />{" "}
              Xem thông tin
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden flex-1 md:flex items-center justify-center">
        {" "}
        <Trailer href={`${baseUrl}${movie?.poster_path}`} />
      </div>
    </div>
  );
};

export default Banner;
