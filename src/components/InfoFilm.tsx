import React, { Fragment } from "react";
import StarRating from "./StarRating";
import Link from "next/link";
import { FaPlay, FaTimes, FaYoutube } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import Button from "./Shared/Button";

type Props = {
  media_type: any;
  trailerModalOpened: any;
  setTrailerModalOpened: any;
  data: any;
  videos: any;
};

const InfoFilm = ({
  media_type,
  trailerModalOpened,
  setTrailerModalOpened,
  data,
  videos,
}: Props) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-4 md:gap-3">
      <div className="order-none  md:order-last flex justify-center md:justify-start space-x-4">
        <Link href={`/movies/${data.movie?.id}`}>
          <button className="buttonBanner bg-white text-black">
            <FaPlay className="h-[14px] w-[14px] text-black md:h-4 md:w-4" />
            Xem ngay
          </button>
        </Link>
        {/* <Link href={`/movies/${data.movie?.id}`}>
          <button className="">
            {" "}
            <GrCircleInformation className="h-[14px] w-[14px] text-black md:h-4 md:w-4" />{" "}
            Trailer
          </button>
        </Link> */}
        {videos?.length > 0 && (
          <Button
            className="buttonBanner bg-[gray]/70 text-black"
            onClick={() => setTrailerModalOpened(true)}
          >
            <FaYoutube className="h-[14px] w-[14px] text-black md:h-4 md:w-4" />
            <span>Xem Trailer</span>
          </Button>
        )}
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
      <div className="">
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
      {trailerModalOpened && (
        <div
          onClick={() => setTrailerModalOpened(false)}
          className="fixed top-0 left-0 z-[60] w-screen h-screen flex justify-center items-center bg-[#2a2a2a80]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full  max-h-screen lg:max-h-[90vh] max-w-7xl flex flex-col gap-3 items-start overflow-y-auto bg-black p-5 rounded-lg"
          >
            <div className="flex justify-between w-full">
              <h1 className="text-2xl ml-2">Trailer Phim</h1>
              <button
                className="cursor-pointer"
                onClick={() => setTrailerModalOpened(false)}
              >
                <FaTimes size={30} />
              </button>
            </div>
            {videos.length > 0 &&
              videos.map((item: any) => (
                <Fragment key={item.key}>
                  <h1 className="text-lg mx-2 mt-4">{item.name}</h1>
                  <div
                    className="relative h-0 w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoFilm;
