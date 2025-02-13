import GenreList from "./GenreList";
import Link from "next/link";

const Aside = () => {
  return (
    <div className="hidden lg:flex lg:flex-col col-span-2  bg-ctrl-start-green-500 row-span-2 p-5 font-sans lg:gap-10">
      <h1 className="text-5xl text-ctrl-start-green-950 font-monomaniac pb-1 lg:text-ctrl-start-green-950 ">
        CTRL+START
      </h1>
      <p className="text-xl bg-ctrl-start-green-200 text-ctrl-start-green-900 p-2 rounded-lg">
        Search
      </p>

      <div className="flex flex-col gap-2 text-2xl font-semibold text-ctrl-start-green-50">
        <Link href={"/"}>New Games</Link>
        <Link href={"/"}>Favorites</Link>
      </div>

      <GenreList />
    </div>
  );
};

export default Aside;
