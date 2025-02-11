import { fetchGames } from "@/lib/rawg";

const ctrlStartHome = async () => {
  const games = await fetchGames();

  return <div>Hi</div>;
};

export default ctrlStartHome;
