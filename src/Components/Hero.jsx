import japan from "../assets/Japan.jpg";

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
        <div className=" px-6  ">
          <h1 className=" text-2xl md:text-4xl font-bold text-white">
            Launch Your Career in Japan
          </h1>
          <p className="text-xl md:text-2xl text-white   py-5">
            Discover exciting work opportunities and explore the vibrant
            culture.
          </p>
          <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 ease-out duration-300 rounded">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
