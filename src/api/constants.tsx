export const baseUrl = "https://image.tmdb.org/t/p/original/";
export const TMDB_IMAGE = "https://image.tmdb.org/t/p/";
export const imageResize = (src: string, dimension: string = "w200") =>
  `${TMDB_IMAGE}${dimension}${src}`;

export const imageOriginal = (src: string) => `${baseUrl}${src}`;

export const embedMovie = (id: number | string) =>
  `https://2embed.cc/embed/${id}`;

export const embedEpisode = (id: number, season: number, episode: number) =>
  `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`;
