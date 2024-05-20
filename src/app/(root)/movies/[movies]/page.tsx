import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import DetailMovie from "@/components/layout/DetailMovie";
import { getMovieDetails } from "@/api/movie";
import { Cast, Detail, Item, VideoTrailer } from "../../../../../typings";

interface MovieProps {
  data: Detail;
  casts: Cast[];
  similar: Item[];
  videos: VideoTrailer[];
}

const Movies: NextPage = async ({ params }: any) => {
  const movieId = params.movies;
  const media_type = "movie";
  const data = await getMovieDetails(movieId, media_type);
  return (
    <>
      <DetailMovie {...data} media_type={media_type} />
    </>
  );
};

export default Movies;
