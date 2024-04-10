import React from "react";
import StarRating from "./StarRating";
import Link from "next/link";

type Props = {
  media_type: any;
  data: any;
};

const InfoFilm = ({ media_type, data }: Props) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-2">
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
        <span className="text-lg text-justify ">{data.overview}</span>
      </p>
      <div className="text-base font-light ">
        <span className="font-semibold">Production Companies: </span>
        <div className="flex gap-5">
          {data.production_companies.map((item: any) => (
            <div className="" key={item.id}>
              <p className="text-[#DB9100]">Name: {item.name}</p>
              <p>Origin Country: {item.origin_country}</p>
            </div>
          ))}
        </div>
      </div>
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
          <p className="text-xl" style={{ wordBreak: "break-all" }}>
            Official website:{" "}
            <a
              className="text-[#DB9100]"
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
