import GenreList from "./GenreList";
import SearchInput from "./SearchInput";
import Link from "next/link";

const Aside = () => {
  return (
    <div className="hidden lg:flex lg:flex-col col-span-2  bg-ctrl-start-green-500 row-span-2 p-5 font-sans lg:gap-10 ">
      <Link
        href="/ctrl-start"
        className="text-5xl text-ctrl-start-green-950 font-monomaniac pb-1 lg:text-ctrl-start-green-950 "
      >
        CTRL+START
      </Link>
      <SearchInput />
      <GenreList />
    </div>
  );
};

export default Aside;
