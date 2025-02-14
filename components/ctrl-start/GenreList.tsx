import { fetchData } from "@/lib/rawg";
import { Genre } from "@/types/rawg-types";
import GenreItem from "./GenreItem";

const GenreList = async () => {
  const genres = await fetchData<Genre>("genres");

  return (
    <div className="font-sans text-ctrl-start-green-50 text-xl font-medium tracking-wide flex flex-col ">
      {genres.map((genre) => (
        <GenreItem genre={genre} key={genre.id} />
      ))}
    </div>
  );
};

export default GenreList;
