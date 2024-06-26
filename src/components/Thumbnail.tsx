import Image from "next/image";
import Link from "next/link";

import { Movie } from "../../typings";

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Link
        href={
          movie.media_type === "tv"
            ? `/tivi/${movie.id}`
            : `/movies/${movie.id}`
        }
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
          alt={""}
        />
      </Link>
    </div>
  );
}

export default Thumbnail;
