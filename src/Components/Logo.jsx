import logo from "../assets/logo.png";
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

export default Logo;
