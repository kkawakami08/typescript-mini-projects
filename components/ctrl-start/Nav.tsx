import { MdMenuOpen, MdSearch } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between bg-ctrl-start-green-500 text-ctrl-start-green-50 px-5 py-1 rounded-lg sticky top-5 z-50 shadow-xl">
      <MdMenuOpen className="size-10" />
      <h1 className="text-4xl font-monomaniac pb-1">CTRL+START</h1>
      <MdSearch className="size-10 " />
    </nav>
  );
};

export default Nav;
