export interface FetchGenericResponse<T> {
  count: number;
  results: T[];
}

export interface Game {
  id: number;
  name: string;
  // released: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  esrb_rating: { id: number; name: string };
}

export interface Platform {
  slug: string;
  id: number;
  name: string;
}

export interface GameDetails extends Game {
  description_raw: string;
  esrb_rating: { name: string };
  genres: { name: string }[];
  rating: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
