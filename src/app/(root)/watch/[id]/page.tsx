import { getWatchMovieContent } from "@/api/movie";
import WatchLayout from "@/components/layout/WatchLayout";

const WatchMovie = async ({ params }: any) => {
  const id = params?.id as string;
  const data = await getWatchMovieContent(id);
  return (
    <>
      <WatchLayout {...data} />
    </>
  );
};

export default WatchMovie;
