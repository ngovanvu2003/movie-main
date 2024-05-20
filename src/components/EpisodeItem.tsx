import Image from "next/image";
import React, { useState } from "react";
Overview;
import { LuPlay } from "react-icons/lu";
import Overview from "./Overview";
import { imageResize } from "@/api/constants";
import Link from "next/link";

const Episodedata = ({ data, params }: any) => {
  const [opened, setOpened] = useState<number | undefined>();
  console.log(data);
  return (
    <>
      <div
        className="relative rounded group flex justify-between items-center datas-center gap-5 bg-[#4B4B4B]/[40%] w-[100%] h-[250px] px-5 py-3 hover:opacity-75 cursor-pointer"
        onClick={() =>
          opened === data.season_number
            ? setOpened(undefined)
            : setOpened(data.season_number)
        }
      >
        <div className="flex items-center ">
          <span>{data.eason_number}</span>
          <button className="relative min-w-[154px] min-h-[231px] object-cover">
            <Image
              src={imageResize(data.poster_path, "w154")}
              alt="episode"
              fill
              className="w-full h-full object-cover"
            />
          </button>
          {/* <p className="p-2 "> {data.overview}</p> */}
        </div>
        <div>
          <div
            className="
          absolute 
          transition 
          opacity-0 
          rounded-full 
          flex 
          datas-center 
          justify-center 
          bg-[#d81f26]
          p-3
          drop-shadow-md 
          bottom-2
          right-5
          group-hover:opacity-100 
        "
          >
            <LuPlay size={20} />
          </div>
          <div className="flex flex-col gap-3 justify-start text-right">
            <p className="font-bold text-xl"> {data?.name}</p>
            <p className="font-bold text-xl">
              {` ${data.episodes.length}`} Tập
            </p>
          </div>
        </div>
      </div>
      {opened === data.season_number && (
        <div className="flex flex-col gap-4 overflow-hidden mt-4 ">
          {data.episodes.map((child: any, index: any) => (
            <Link
              href={`${data.id}/watch/${child?.season_number}/${index + 1}`}
              className="bg-[#4B4B4B]/[40%] ml-5 rounded"
              key={index}
            >
              <div
                key={child.episode_number}
                className="flex items-center py-2 bg-dark-darken w-full rounded-lg overflow-hidden cursor-pointer hover:brightness-[80%] transition duration-300"
              >
                <div className="w-10 hidden md:flex flex-shrink-0 justify-center items-center">
                  <h1 className="text-center">Tập {index + 1}</h1>
                </div>
                <Image
                  className="w-[154px] h-[87px] flex-shrink-0 mr-4 object-cover rounded-md"
                  src={imageResize(child.still_path, "w154")}
                  width={154}
                  height={100}
                  alt=""
                />
                <div className="flex-grow">
                  <h1>{child.name}</h1>
                  <p className="text-gray-400">{child.air_date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Episodedata;
