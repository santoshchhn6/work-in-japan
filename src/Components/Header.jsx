import { Link } from "react-router-dom";
import Languages from "./Languages";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-white shadow px-12 py-5 flex justify-center md:justify-between items-center">
      <Logo />
      <div className="flex items-center gap-5">
        <Nav />
        <Languages />
      </div>
    </div>
  );
};

const Nav = () => {
  const navlist = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Jobs",
      to: "/jobs",
    },
    {
      title: "About Us",
      to: "/about",
    },
    {
      title: "Contact US",
      to: "/contact",
    },
  ];
  return (
    <div className="hidden md:flex space-x-8">
      {navlist.map((nav, index) => (
        <Link
          key={index}
          to={nav.to}
          className="text-gray-800 text-xl  hover:text-red-600 ease-out duration-300 "
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
