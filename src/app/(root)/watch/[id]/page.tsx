import Meta from "@/components/Shared/Meta";
import StarRating from "@/components/StarRating";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Detail, Item } from "../../../../../typings";
import { embedMovie, imageOriginal, imageResize } from "@/api/constants";
import { getWatchMovieContent } from "@/api/movie";
import WatchLayout from "@/components/layout/WatchLayout";

const WatchMovie = async ({ params }: any) => {
  const id = params?.id as string;
  const data = await getWatchMovieContent(id);
  return (
    <>
      <div>
        <WatchLayout {...data} />
      </div>
    </>
  );
};

export default WatchMovie;
