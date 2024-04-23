import logo from "../assets/logo.png";

const Header = () => {
  const navlist = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Jobs",
      to: "/",
    },
    {
      title: "About Us",
      to: "/",
    },
    {
      title: "Contact US",
      to: "/",
    },
  ];
  return (
    <nav className="bg-white shadow px-6 py-5 flex justify-center md:justify-between items-center">
      <Logo />

      <div className="hidden md:flex space-x-8">
        {navlist.map((nav, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-800 text-xl  hover:text-red-600 ease-out duration-300 "
          >
            {nav.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="" className="w-10" />
      <div className="text-gray-800 text-2xl font-bold ">
        Work <span className="text-gray-500">in</span>{" "}
        <span className="text-red-600">Japan</span>
      </div>
    </div>
  );
};

export default Header;
