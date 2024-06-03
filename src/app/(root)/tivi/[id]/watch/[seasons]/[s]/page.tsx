import { embedEpisode } from "@/api/constants";
import { getTVSeasons } from "@/api/movie";
import StarRating from "@/components/StarRating";
import React from "react";
import { Detail, Season } from "../../../../../../../../typings";
import Episodedata from "@/components/EpisodeItem";

const page = async ({ params }: any) => {
  const response = (await getTVSeasons(params.id)) as {
    data: Detail;
    seasons: Season[];
  };
  return (
    <div className="mt-28 flex flex-col lg:flex-row px-5 lg:px-10 gap-8">
      <div className="flex-grow">
        <div
          className="relative h-0 w-full"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedEpisode(params.id, params.seasons, params.s)}
            title=""
            frameBorder="0"
            allowFullScreen
            loading="eager"
          ></iframe>
        </div>
        <div className="my-10 flex flex-col items-start gap-4 ">
          <a className="text-2xl hover:text-orange transition">
            {response.data.title}
          </a>

          <p>{response.data.overview}</p>
          <p>Ngày Phát Hành: {response.data.release_date}</p>
          <StarRating
            maximum={10}
            stars={Math.round(response.data.vote_average)}
            extraText={` (${response.data.vote_count} votes)`}
          />
        </div>
      </div>
      <div className="">
        <h1 className="text-xl text-gray-100">Danh sách tập</h1>
        {response.seasons.map((item: any, index: any) => (
          <div key={index}>
            <Episodedata xs={true} data={item} id={params.id} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
