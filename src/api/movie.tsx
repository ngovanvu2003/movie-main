import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const language: string = "en-US";
// "vi-VI"

// get movie home
export const getMovie = async () => {
  const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=${language}`,
    fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${language}`,
    TrendingTVShows: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=${language}`,
    PopularTVShows: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=${language}`,
    TopRatedTVShows: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=${language}`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/dziscover/movie?api_key=${API_KEY}&language=${language}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=99`,
  };
  const data = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.TrendingTVShows).then((res) => res.json()),
    fetch(requests.PopularTVShows).then((res) => res.json()),
    fetch(requests.TopRatedTVShows).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);
  return data;
};

// const getMovieDetails = () = {
//     dataDeail: `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`,
//     Casts: `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${language}`,
//     Similar: `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${language}`,
//    Trailer: `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${language}`
// }

// get detail movie
export const getMovieDetails: (id: string) => Promise<any> = async (id) => {
  const labels = ["data", "casts", "similar", "videos"];

  const result = (
    await Promise.all([
      axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`
      ),
      axios.get(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${language}`
      ),
      axios.get(
        `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${language}`
      ),
      axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${language}`
      ),
    ])
  ).reduce((final, current, index) => {
    if (labels[index] === "data") {
      final[labels[index]] = current.data;
    } else if (labels[index] === "casts") {
      final[labels[index]] = current.data.cast
        .filter((item: any) => item.name && item.character && item.profile_path)
        .slice(0, 10);
    } else if (labels[index] === "similar") {
      final[labels[index]] = current.data.results.map((item: any) => ({
        ...item,
        media_type: "movie",
      }));
    } else if (labels[index] === "videos") {
      final[labels[index]] = current.data.results.filter(
        (item: any) => item.name && item.site === "YouTube"
      );
    }

    return final;
  }, {} as any);

  return result;
};
