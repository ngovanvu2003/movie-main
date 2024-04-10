import React from "react";
import StarRating from "./StarRating";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";

type Props = {
  media_type: any;
  data: any;
};

const InfoFilm = ({ media_type, data }: Props) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-4 md:gap-2">
      <div className="flex justify-center md:justify-start space-x-4">
        <Link href={`/movies/${data.movie?.id}`}>
          <button className="buttonBanner bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-4 md:w-4" />
            Xem ngay
          </button>
        </Link>
        <Link href={`/movies/${data.movie?.id}`}>
          <button className="buttonBanner bg-[gray]/70 text-black">
            {" "}
            <GrCircleInformation className="h-4 w-4 text-black md:h-4 md:w-4" />{" "}
            Trailer
          </button>
        </Link>
      </div>
      <h3 className="text-white font-semibold text-5xl pb-3">
        {" "}
        {data?.title || data?.name || data?.original_name}
      </h3>

      <p className="text-base font-light">
        {data.release_date && (
          <span className="font-semibold">
            Release Date: {data.release_date}
          </span>
        )}
        {data.last_air_date && (
          <span className="font-semibold">
            Final Episode Release Date: {data.last_air_date}
          </span>
        )}
      </p>
      <p className="text-base font-light">
        <span className="text-base  md:text-lg text-justify ">
          {data.overview}
        </span>
      </p>

      <div className="text-base font-light  ">
        {data.genres && (
          <div className="flex gap-2 flex-wrap">
            {data.genres.map((item: any) => (
              <Link href="" key={item.id} legacyBehavior>
                <a className="bg-dark-lighten border border-white px-3 py-1 rounded-full whitespace-nowrap text-white">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center">
        {data.vote_average ? (
          <StarRating
            stars={Math.round(data.vote_average)}
            maximum={10}
            extraText={` (${data.vote_count} votes)`}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="mt-10 ">
        {data.homepage && (
          <p className="font-semibold" style={{ wordBreak: "break-all" }}>
            Official website:{" "}
            <a
              className="text-base  md:text-lg text-[#DB9100]"
              href={data.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.homepage}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default InfoFilm;
