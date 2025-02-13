export interface FetchGenericResponse<T> {
  count: number;
  results: T[];
}

export interface Game {
  id: number;
  name: string;
  // released: string;
  background_image: string;
  parent_platforms: Platform[];
  esrb_rating: { id: number; name: string };
}

export interface Platform {
  platform: {
    slug: string;
  };
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
  image_background: string;
}
