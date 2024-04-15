"use client";
import React, { useState } from "react";
import { Cast, Detail, Item, VideoTrailer } from "../../../typings";
import { NextPage } from "next";
import { baseUrl, imageOriginal, imageResize } from "@/api/constants";
import Image from "next/image";
import { GrCircleInformation } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import Backdrop from "@/components/Backdrop";
import InfoFilm from "../InfoFilm";
import CastsMovies from "../CastsMovies";
import Production from "../Production";

interface ItemViewProps {
  props: {
    data: Detail;
    casts: Cast[];
    similar: Item[];
    videos: VideoTrailer[];
  };
  media_type: "movie" | "tv";
}
const DetailMovie: NextPage<ItemViewProps> = ({
  data,
  casts,
  similar,
  videos,
  media_type,
}: any) => {
  // data cần lấy
  // media_type,
  // data,
  // casts,
  // similar,
  // videos,
  const [trailerModalOpened, setTrailerModalOpened] = useState(false);
  return (
    <>
      <div
        className="
    relative
    flex
    justify-center 
    items-center 
    h-full 
    overflow-y-auto"
      >
        <div className="w-full h-[100vh] ">
          <Backdrop
            className={`mask-image`}
            image={`${imageOriginal(data?.backdrop_path)}`}
          />
        </div>
        <div className="absolute md:pt-0  pt-[25rem] px-6 md:px-20 flex flex-col md:flex-row gap-5 ">
          <div className="md:w-[300px] w-full flex-shrink-0 flex justify-center items-start">
            <Image
              src={imageResize(data?.poster_path, "w300")}
              alt="Mountains"
              sizes="100vw"
              width={300}
              height={100}
              objectFit="cover"
              className=" rounded-md w-[260px] md:w-[300px] transition ease-in-out cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center lg:justify-start gap-3">
            <InfoFilm
              trailerModalOpened={trailerModalOpened}
              setTrailerModalOpened={setTrailerModalOpened}
              media_type={media_type}
              data={data}
              videos={videos}
            />
          </div>
        </div>

        {/* <FrameWatchFilm /> */}
      </div>
      <Production data={data} />
      <div className="pt-4">
        <CastsMovies casts={casts} />
      </div>
    </>
  );
};

export default DetailMovie;
