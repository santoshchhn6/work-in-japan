import { Link } from "react-router-dom";

const LinkButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-6 ease-out duration-300 rounded"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
