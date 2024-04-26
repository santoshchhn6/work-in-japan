import CustomButton from "../Components/CustomButton";
import Heading from "../Components/Heading";
import Logo from "../Components/Logo";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center gap-3 ">
      <img
        src={about}
        alt=""
        className="w-full md:max-w-[500px] flex-1 border-2 bg-white shadow-md object-cover"
      />
      <div className=" md:max-w-[500px] flex-1 flex flex-col items-center border px-6 py-10 bg-white shadow-md">
        <Logo />
        <Heading className="md:my-3  ">About Us</Heading>
        <p className="mb-5 text-xl ">
          We provide a comprehensive platform with curated job listings,
          personalized career guidance, and expert advice on the Japanese work
          culture and application process. We empower you to present your best
          self and secure the perfect opportunity.
        </p>
        <CustomButton>Learn More</CustomButton>
      </div>
    </div>
  );
};

export default About;
