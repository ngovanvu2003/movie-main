import axios from "axios";
import { instance } from "./config";
import { Detail } from "../../typings";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const language: string = "en-US";
const paramMovie = `?api_key=${API_KEY}&language=${language}`;
// "vi-VI";
// get movie home
export const getMovie: () => Promise<any> = async () => {
  const HomeAPIRoutes: {
    [key: string]: { url: string; media_type: "tv" | "movie" };
  } = {
    TopTrending: {
      url: `/trending/movie/week${paramMovie}`,
      media_type: "movie",
    },
    NetflixOriginals: {
      url: `/discover/movie${paramMovie}`,
      media_type: "movie",
    },
    TopPopular: {
      url: `/movie/popular${paramMovie}`,
      media_type: "movie",
    },
    topTopRated: {
      url: `/movie/top_rated${paramMovie}`,
      media_type: "movie",
    },
    TopTrendingTVShows: {
      url: `/trending/tv/week${paramMovie}`,
      media_type: "tv",
    },
    TopPopularTVShows: {
      url: `/tv/popular${paramMovie}`,
      media_type: "tv",
    },
    TopRatedTVShows: {
      url: `/tv/top_rated${paramMovie}`,
      media_type: "tv",
    },
    TopActionMovies: {
      url: `/discover/movie${paramMovie}&with_genres=28`,
      media_type: "movie",
    },
    TopComedyMovies: {
      url: `/discover/movie${paramMovie}&with_genres=35`,
      media_type: "movie",
    },
    TopHorrorMovies: {
      url: `/discover/movie${paramMovie}&with_genres=27`,
      media_type: "movie",
    },
    TopRomanceMovies: {
      url: `/discover/movie${paramMovie}&with_genres=10749`,
      media_type: "movie",
    },
    TopDocumentarie: {
      url: `/discover/movie${paramMovie}&with_genres=99`,
      media_type: "movie",
    },
  };

  const promises = await Promise.all(
    Object.keys(HomeAPIRoutes).map((item) =>
      instance.get(HomeAPIRoutes[item].url)
    )
  );
  const data = promises.reduce((final, current, index) => {
    final[Object.keys(HomeAPIRoutes)[index]] = current.data.results.map(
      (item: any) => ({
        ...item,
        media_type: HomeAPIRoutes[Object.keys(HomeAPIRoutes)[index]].media_type,
      })
    );

    return final;
  }, {} as any);

  return data;
};

// export const getMovie = async () => {
//   const requests = {
//     fetchTrending: `${sua}/trending/all/week?api_key=${API_KEY}&language=${language}`,
//     fetchNetflixOriginals: `${sua}/discover/movie?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `${sua}/movie/top_rated?api_key=${API_KEY}&language=${language}`,
//     TrendingTVShows: `${sua}/trending/tv/week?api_key=${API_KEY}&language=${language}`,
//     PopularTVShows: `${sua}/tv/popular?api_key=${API_KEY}&language=${language}`,
//     TopRatedTVShows: `${sua}/tv/top_rated?api_key=${API_KEY}&language=${language}`,
//     fetchActionMovies: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=28`,
//     fetchComedyMovies: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=35`,
//     fetchHorrorMovies: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=27`,
//     fetchRomanceMovies: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10749`,
//     fetchDocumentaries: `${sua}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=99`,
//   };
//   const data = await Promise.all([
//     fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
//     fetch(requests.fetchTrending).then((res) => res.json()),
//     fetch(requests.fetchTopRated).then((res) => res.json()),
//     fetch(requests.TrendingTVShows).then((res) => res.json()),
//     fetch(requests.PopularTVShows).then((res) => res.json()),
//     fetch(requests.TopRatedTVShows).then((res) => res.json()),
//     fetch(requests.fetchActionMovies).then((res) => res.json()),
//     fetch(requests.fetchComedyMovies).then((res) => res.json()),
//     fetch(requests.fetchHorrorMovies).then((res) => res.json()),
//     fetch(requests.fetchRomanceMovies).then((res) => res.json()),
//     fetch(requests.fetchDocumentaries).then((res) => res.json()),
//   ]);
//   return data;
// };

// const getMovieDetails = () = {
//     dataDeail: `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`,
//     Casts: `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${language}`,
//     Similar: `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${language}`,
//    Trailer: `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${language}`
// }

// get detail movie
export const getMovieDetails: (
  id: string,
  category: string
) => Promise<any> = async (id, category) => {
  const labels = ["data", "casts", "similar", "videos"];

  const result = (
    await Promise.all([
      instance.get(`/${category}/${id}${paramMovie}`),
      instance.get(`/${category}/${id}/credits${paramMovie}`),
      instance.get(`/${category}/${id}/similar${paramMovie}`),
      instance.get(`/${category}/${id}/videos${paramMovie}`),
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

export const getTVSeasons: (id: string) => Promise<any> = async (id) => {
  const data = (await instance.get(`/tv/${id}${paramMovie}`)).data as Detail;

  if (data.seasons.length === 0) throw new Error("404");

  const res = await Promise.all(
    data.seasons.map((item) =>
      instance.get(`/tv/${id}/season/${item.season_number}${paramMovie}`)
    )
  );

  const seasons = res
    .map((item) => item.data)
    .filter(
      (item) =>
        item.name &&
        item.poster_path &&
        item.episodes.length > 0 &&
        item.episodes.every((child: any) => child.name && child.still_path)
    );

  return {
    seasons,
    data,
  };
};
