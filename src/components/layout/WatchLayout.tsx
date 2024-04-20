import React from "react";
import Meta from "../Shared/Meta";
import { NextPage } from "next";
import { Detail, Item } from "../../../typings";
import { embedMovie, imageOriginal, imageResize } from "@/api/constants";

import Link from "next/link";
import StarRating from "../StarRating";
import Image from "next/image";

import { loadingFunction } from "@/hook/function";
import Iframe from "../Iframe";
interface WatchMovieProps {
  data: Detail;
  similar: Item[];
}

const WatchLayout: NextPage<WatchMovieProps> = ({ data, similar }) => {
  const loadHIHI = loadingFunction();
  return (
    <>
      <Meta
        title={`${data.title} - Xem Phim - Phim FPOLY`}
        description="Xem phim của bạn"
        image={imageOriginal(data.backdrop_path)}
      />
      <div className="mt-28 flex flex-col lg:flex-row px-5 lg:px-20 gap-8">
        <div className="flex-grow">
          <div
            className="relative h-0 w-full"
            style={{ paddingBottom: "56.25%" }}
          >
            <Iframe link={data.id} />
          </div>
          <div className="my-10 flex flex-col items-start gap-4 ">
            {/* <Link href={`/movie/${data.id}`}>
              <a className="text-2xl hover:text-orange transition">
                {data.title}
              </a>
            </Link> */}
            <p>{data.overview}</p>
            <p>Ngày Phát Hành: {data.release_date}</p>
            <StarRating
              maximum={10}
              stars={Math.round(data.vote_average)}
              extraText={` (${data.vote_count} votes)`}
            />
          </div>
        </div>
        <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4 overflow-y-auto lg:max-h-screen">
          <h1 className="text-xl text-gray-100">Phim Tương Tự</h1>
          {similar.map((item) => (
            <Link key={item.id} href={`/movies/${item.id}`}>
              <div>
                <div className="flex gap-4 pr-5 group cursor-pointer">
                  <Image
                    className="  object-cover group-hover:brightness-75 transition duration-300"
                    width={100}
                    height={120}
                    src={imageResize(item.poster_path, "w92")}
                    alt=""
                  />
                  <div className="py-3 group-hover:text-orange transition duration-300">
                    <h1 className="text-gray-100">{item.title}</h1>
                    <StarRating
                      stars={Math.round(item.vote_average / 2)}
                      maximum={5}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchLayout;
