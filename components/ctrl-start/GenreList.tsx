import { fetchData, getCroppedImageUrl } from "@/lib/rawg";
import { Genre } from "@/types/rawg-types";
import Image from "next/image";

const GenreList = async () => {
  const genres = await fetchData<Genre>("genres");

  return (
    <div className="font-sans text-ctrl-start-green-50 text-xl font-semibold tracking-wide flex flex-col gap-3">
      {genres.map((genre) => (
        <div key={genre.id} className="flex items-center gap-2 ">
          <Image
            src={getCroppedImageUrl(genre.image_background)}
            width={100}
            height={100}
            className="object-cover size-10 rounded-lg"
            alt={`${genre.name} thumbnail`}
          />

          <p key={genre.id}>{genre.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
