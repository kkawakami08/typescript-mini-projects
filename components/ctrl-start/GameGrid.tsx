import { fetchGames } from "@/lib/rawg";
import GameCard from "./GameCard";

const GameGrid = async () => {
  const { results } = await fetchGames();

  if (!results) {
    return <div>No games found!</div>;
  }

  console.log(results[1]);

  return (
    <div className="flex flex-col gap-5 py-5  items-center">
      {results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
