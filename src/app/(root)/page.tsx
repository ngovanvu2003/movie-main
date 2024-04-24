import Banner from "@/components/Banner";
import { getMovie } from "@/api/movie";
import Row from "@/components/Row";
import { Item } from "../../../typings";
interface Homedata {
  props: any;
}
async function getData() {
  try {
    const data = await getMovie();
    return {
      props: {
        data,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
      revalidate: true,
    };
  }
}
export default async function Home() {
  const data: any = await getData();
  console.log(data.props.data["TopTrending"]);
  return (
    <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginals={data.props.data["NetflixOriginals"]} />
      <section className="md:space-y-24">
        <Row title="Trending Now" movies={data.props.data["TopTrending"]} />
        {/* {/* <Row title="Top Rated" movies={topRated} /> */}
        <Row
          title="Action Thrillers"
          movies={data.props.data["TopActionMovies"]}
        />
        <Row
          title="Trending TV Shows"
          movies={data.props.data["TopTrendingTVShows"]}
        />
        <Row
          title="Popular TV Shows"
          movies={data.props.data["TopPopularTVShows"]}
        />
        <Row
          title="Top Rated TV Shows"
          movies={data.props.data["TopRatedTVShows"]}
        />
        <Row title="Comedies" movies={data.props.data["TopComedyMovies"]} />
        <Row
          title="Scary Movies"
          movies={data.props.data["TopRomanceMovies"]}
        />
        <Row
          title="Romance Movies"
          movies={data.props.data["TopRomanceMovies"]}
        />
        <Row
          title="Documentaries"
          movies={data.props.data["TopDocumentarie"]}
        />
      </section>
    </main>
  );
}
