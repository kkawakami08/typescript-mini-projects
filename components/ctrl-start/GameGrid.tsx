"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/rawg";
import { Game } from "@/types/rawg-types";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import PlatformSelect from "./PlatformSelect";
import SortSelector from "./SortSelector";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { selectedGenre, selectedPlatform, sortOrder } = useGlobalContext();

  console.log(sortOrder);

  const skeletonArray = Array.from(
    { length: 15 },
    (_, index) => `Item ${index + 1}`
  );

  useEffect(() => {
    setLoading(true);
    const getGames = async () => {
      const games = await fetchData<Game>(
        "games",
        selectedGenre || null,
        selectedPlatform || null,
        sortOrder || null
      );
      setGames(games);
      setLoading(false);
    };
    getGames();
  }, [selectedGenre, selectedPlatform, sortOrder]);

  if (!games) {
    return <div>No games found!</div>;
  }

  if (loading) {
    return (
      <>
        <div className="flex gap-5">
          <div className="bg-gray-200 rounded-lg w-40 h-10 flex items-center justify-center animate-pulse">
            <div className="bg-gray-100 rounded-lg w-32 h-4"></div>
          </div>
          <div className="bg-gray-200 rounded-lg w-40 h-10 flex items-center justify-center animate-pulse">
            <div className="bg-gray-100 rounded-lg w-32 h-4"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-5  items-center md:grid md:grid-cols-2 md:justify-items-center 2xl:grid-cols-3 ">
          {/* <SkeletonCard /> */}

          {skeletonArray.map((card, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </>
    );
  }

  // console.log(results[1]);

  return (
    <>
      <div className="flex gap-5 items-center pt-5 justify-center lg:justify-start">
        <PlatformSelect />
        <SortSelector />
      </div>
      <div className="flex flex-col gap-5 py-5  items-center md:grid md:grid-cols-2 md:justify-items-center 2xl:grid-cols-3 ">
        {/* <SkeletonCard /> */}

        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
