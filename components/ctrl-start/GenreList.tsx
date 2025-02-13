import { fetchGenres } from "@/lib/rawg";

const GenreList = async () => {
  const genres = await fetchGenres();

  return (
    <div className="font-sans text-ctrl-start-green-50 text-lg flex flex-col gap-2">
      {genres.results.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenreList;
