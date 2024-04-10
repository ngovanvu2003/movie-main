/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
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
            <InfoFilm media_type={media_type} data={data} />
          </div>
        </div>

        {/* <FrameWatchFilm /> */}
      </div>

      <div className="pt-4">
        <CastsMovies casts={casts} />
      </div>
      <div className="px-6 md:px-20 ">
        <h1 className="text-lg py-2">Production Companies</h1>
        <div className="flex justify-center gap-5">
          {data.production_companies.map((item: any) => (
            <div className="text-center" key={item.id}>
              <p className="text-[#DB9100]"> {item.name}</p>
              <p> {item.origin_country}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
