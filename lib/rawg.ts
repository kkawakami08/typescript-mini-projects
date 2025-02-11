import { Game, GameDetails } from "@/types/rawg-types";

const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const RAWG_BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async (): Promise<Game[] | null> => {
  const res = await fetch(
    `${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}&page_size-10`
  );
  if (!res.ok) throw new Error("Failed to fetch data from RAWG");

  const data = await res.json();

  return data.results;
};

export const fetchGame = async (
  gameId: number
): Promise<GameDetails[] | null> => {
  const res = await fetch(
    `${RAWG_BASE_URL}/games/${gameId}?key=${RAWG_API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch data from RAWG");

  return res.json();
};
