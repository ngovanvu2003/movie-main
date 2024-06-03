"use client";
import React, { useState } from "react";
import { Cast, Detail, Item, VideoTrailer } from "../../../typings";
import { NextPage } from "next";
import { imageOriginal, imageResize } from "@/api/constants";
import Image from "next/image";
import Backdrop from "@/components/Backdrop";
import InfoFilm from "../InfoFilm";
import CastsMovies from "../CastsMovies";
import Production from "../Production";
import Meta from "../Shared/Meta";
import EpisodeItem from "../EpisodeItem";

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
  seasons,
  id,
}: any) => {
  const [trailerModalOpened, setTrailerModalOpened] = useState(false);
  const active = [
    {
      name: "Episode",
      id: "Episode",
    },
    {
      name: "Information",
      id: "Information",
    },
  ];
  console.log(id);
  const [opened, setOpened] = useState<string | undefined>("Episode");
  return (
    <>
      <Meta
        title={
          media_type == "movie" ? data.title + " - Movie" : data.name + " - TV"
        }
        description="Xem Thêm Thông Tin"
        image={imageOriginal(data.backdrop_path)}
      />
      <div
        className="
    relative
    flex
    justify-center 
    items-center 
    h-full 
    overflow-y-auto"
      >
        <div className="w-full h-[80vh] ">
          <Backdrop
            className={`mask-image`}
            image={`${imageOriginal(data?.backdrop_path)}`}
          />
        </div>
        <div className="absolute md:pt-0 left-0 pt-[25rem] px-6 md:px-20 flex flex-col md:flex-row gap-5 ">
          <div className="md:w-[300px] w-full flex-shrink-0 flex justify-center items-start">
            <Image
              src={imageResize(data?.poster_path, "w300")}
              alt="Mountains"
              width={300}
              height={100}
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
      </div>{" "}
      <div id="episode" className="px-6 md:px-20">
        {media_type == "tv" ? (
          <div>
            <div className="flex justify-start gap-5 py-3">
              {active.map((item: any, index: any) => (
                <div key={index}>
                  <h1
                    className={`${
                      item.name == opened ? "bg-[gray]/70 hover:text-black" : ""
                    } " text-lg border-2 px-3 py-2 border-white rounded-full hover:bg-[gray]/70 hover:text-black"`}
                    onClick={() => setOpened(item.name)}
                  >
                    {item.name}
                  </h1>
                </div>
              ))}
            </div>
            {opened == "Episode" ? (
              <div className="flex flex-col gap-3 h-[500px]  mt-2 ">
                {seasons.map((item: any, index: any) => (
                  <div key={index}>
                    <EpisodeItem data={item} id={id} />{" "}
                  </div>
                ))}
              </div>
            ) : (
              <CastsMovies casts={casts} />
            )}
          </div>
        ) : (
          <CastsMovies casts={casts} />
        )}
      </div>
      {/* <Production data={data} /> */}
      {/* <div className="px-6 md:px-20">
        <Row title="Liên quan" movies={similar} />
      </div> */}
    </>
  );
};

export default DetailMovie;
