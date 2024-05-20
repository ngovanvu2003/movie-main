import { Fragment, useState } from "react";
import { GetServerSideProps } from "next";

import type { NextPage } from "next";
import { Detail, Episode, Season } from "../../../../../typings";
import Meta from "@/components/Shared/Meta";
import { embedEpisode, imageOriginal, imageResize } from "@/api/constants";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import { getMovieDetails, getTVSeasons } from "@/api/movie";
import DetailMovie from "@/components/layout/DetailMovie";

interface TVEpisodeProps {
  seasons: Season[];
  data: Detail;
  seasonId: number;
  episodeId: number;
  episode: Episode;
}

const TVEpisode: NextPage = async ({ params }: any) => {
  // const [opened, setOpened] = useState<number | undefined>(Number(seasonId));
  const id = params?.id as string;
  const media_type = "tv";
  const data = await getMovieDetails(id, media_type);
  const response = (await getTVSeasons(id)) as {
    data: Detail;
    seasons: Season[];
  };
  return (
    <DetailMovie {...data} seasons={response.seasons} media_type={media_type} />
  );
};

export default TVEpisode;
