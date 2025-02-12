import { Game, GameDetails, FetchGamesResponse } from "@/types/rawg-types";

const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const RAWG_BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async (): Promise<FetchGamesResponse> => {
  const res = await fetch(`${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch data from RAWG");

  const data: FetchGamesResponse = await res.json();

  return data;
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

export const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
