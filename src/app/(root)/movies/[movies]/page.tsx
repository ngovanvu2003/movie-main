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

// const getStaticProps: GetStaticProps | Promise<void> = async () => {
//   console.log(movieId)
//     const response = await getMovieDetails(movieId);
//     return {
//         props: {
//             ...response,
//         },
//         revalidate: 3600,
//     };
// } ;

const Movies: NextPage<MovieProps> = async ({ params }: any) => {
  const movieId = params.movies;
  const data = await getMovieDetails(movieId);
  return (
    <>
      <div>
        <DetailMovie {...data} media_type="movie" />
      </div>
    </>
  );
};

export default Movies;
