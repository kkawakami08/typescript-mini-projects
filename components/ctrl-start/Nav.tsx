"use client";
import { MdMenuOpen, MdSearch } from "react-icons/md";
import GenreList from "./GenreList";
import { useState } from "react";

const Nav = () => {
  const [openAside, setOpenAside] = useState(false);
  return (
    <nav className="flex lg:col-span-5 relative">
      <div className="lg:hidden flex items-center justify-between bg-ctrl-start-green-500 text-ctrl-start-green-50 px-5 py-1 rounded-lg sticky top-5 z-50 shadow-xl w-full">
        <MdMenuOpen
          className="size-10 "
          onClick={() => setOpenAside((prev) => !prev)}
        />
        <h1 className="text-4xl text-ctrl-start-green-950 font-monomaniac pb-1 lg:text-ctrl-start-green-50">
          CTRL+START
        </h1>
        <MdSearch className="size-10 " />
      </div>
    </nav>
  );
};

export default Nav;

// flex items-center justify-between bg-ctrl-start-green-500 text-ctrl-start-green-50 px-5 py-1 rounded-lg sticky top-5 z-50 shadow-xl
