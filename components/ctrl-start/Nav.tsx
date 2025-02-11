import { MdMenuOpen, MdSearch } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <MdMenuOpen className="size-12" />
      <h1 className="text-5xl">CTRL+START</h1>
      <MdSearch className="size-12" />
    </nav>
  );
};

export default Nav;
