import { FetchGenericResponse } from "@/types/rawg-types";

const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const RAWG_BASE_URL = "https://api.rawg.io/api";

export const fetchData = async <T>(
  endpoint: string,
  genreSlug?: string | null,
  platformId?: number | null,
  sortOrder?: string | null
): Promise<T[]> => {
  const url = new URL(`${RAWG_BASE_URL}/${endpoint}`);
  url.searchParams.append("key", RAWG_API_KEY || "");

  if (genreSlug) {
    url.searchParams.append("genres", genreSlug);
  }
  if (platformId) {
    url.searchParams.append("platforms", platformId);
  }
  if (sortOrder) {
    url.searchParams.append("ordering", sortOrder);
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch data from RAWG");

  const data: FetchGenericResponse<T> = await res.json();

  return data.results;
};

export const getCroppedImageUrl = (url: string | null) => {
  if (url === null) {
    return;
  }
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
