"use client";
import { Genre } from "@/types/rawg-types";
import { useGlobalContext, ContextType } from "@/context/GlobalContext";
import Image from "next/image";
import { getCroppedImageUrl } from "@/lib/rawg";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  const { selectedGenre, setSelectedGenre } = useGlobalContext();

  return (
    <div
      key={genre.id}
      className={`flex items-center gap-2  ${
        selectedGenre === genre.slug && "bg-ctrl-start-green-800 rounded-lg"
      }`}
    >
      <Image
        src={getCroppedImageUrl(genre.image_background)}
        width={100}
        height={100}
        className="object-cover size-10 rounded-lg m-2"
        alt={`${genre.name} thumbnail`}
      />

      <button key={genre.id} onClick={() => setSelectedGenre(genre.slug)}>
        {genre.name}
      </button>
    </div>
  );
};

export default GenreItem;
