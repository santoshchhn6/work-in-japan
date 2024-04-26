import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="" className="w-10" />
      <div className="flex gap-1 text-gray-600 text-2xl font-bold ">
        <span>Work</span>
        <span className="text-gray-500">in</span>
        <span className="text-red-600">Japan</span>
      </div>
    </Link>
  );
};

export default Logo;
