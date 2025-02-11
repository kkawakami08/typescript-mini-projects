export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  platforms: Platform[];
}

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface GameDetails extends Game {
  description_raw: string;
  esrb_rating: { name: string };
  genres: { name: string }[];
  rating: number;
}
