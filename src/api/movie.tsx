import axios from "axios";
import { instance } from "./config";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const language: string = "en-US";
const paramMovie = `?api_key=${API_KEY}&language=${language}`;
const sua = "https://api.themoviedb.org/3";
// "vi-VI";
// get movie home
export const getMovie = async () => {
  const requests = {
    fetchTrending: `${sua}/trending/all/week?api_key=${API_KEY}&language=${language}`,
    fetchNetflixOriginals: `${sua}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${sua}/movie/top_rated?api_key=${API_KEY}&language=${language}`,
    TrendingTVShows: `${sua}/trending/tv/week?api_key=${API_KEY}&language=${language}`,
    PopularTVShows: `${sua}/tv/popular?api_key=${API_KEY}&language=${language}`,
    TopRatedTVShows: `${sua}/tv/top_rated?api_key=${API_KEY}&language=${language}`,
    fetchActionMovies: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=28`,
    fetchComedyMovies: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=35`,
    fetchHorrorMovies: `${sua}/dziscover/movie?api_key=${API_KEY}&language=${language}&with_genres=27`,
    fetchRomanceMovies: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10749`,
    fetchDocumentaries: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=99`,
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
      instance.get(`/movie/${id}${paramMovie}`),
      instance.get(`/movie/${id}/credits${paramMovie}`),
      instance.get(`/movie/${id}/similar${paramMovie}`),
      instance.get(`/movie/${id}/videos${paramMovie}`),
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

export const getWatchMovieContent: (id: string) => Promise<any> = async (
  id
) => {
  const labels = ["data", "similar"];

  const result = (
    await Promise.all([
      instance.get(`/movie/${id}${paramMovie}`),
      instance.get(`/movie/${id}/similar${paramMovie}`),
    ])
  ).reduce((final, current, index) => {
    if (labels[index] === "data") {
      final[labels[index]] = current.data;
    } else if (labels[index] === "similar") {
      final[labels[index]] = current.data.results.map((item: any) => ({
        ...item,
        media_type: "movie",
      }));
    }
    return final;
  }, {} as any);

  return result;
};
