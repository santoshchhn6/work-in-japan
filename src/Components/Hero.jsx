import { Link } from "react-router-dom";
import japan from "../assets/Japan.jpg";
import LinkButton from "./LinkButton";

const Hero = () => {
  return (
    <div className="w-full aspect-[4/2] relative text-center  overflow-hidden">
      <img
        src={japan}
        alt="Japanese work scene"
        className="absolute w-full aspect-[4/2] object-cover"
      />
      <div className="absolute w-full aspect-[4/2] bg-black/50"></div>
      <div className="absolute w-full aspect-[4/2] flex justify-center items-center ">
        <div className=" px-12  ">
          <h1 className=" text-2xl md:text-4xl font-bold text-white">
            Launch Your Career in Japan
          </h1>
          <p className="text-xl md:text-2xl text-white   py-5">
            Discover exciting work opportunities and explore the vibrant
            culture.
          </p>
          <LinkButton to={"/jobs"}>Explore Jobs</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
