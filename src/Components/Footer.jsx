import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white shadow px-6 pt-6">
      <div className="flex flex-wrap gap-24">
        <NavLinks />

        <ContactInfo />
      </div>

      <hr className=" bg-gray-300 h-px border-0 my-5" />

      <SocialLinks />

      <hr className=" bg-gray-300 h-px border-0 mb-3 mt-5" />

      <p className="container mx-auto  py-4 text-center text-gray-700 ease-out duration-300">
        &copy; 2024 Work in Japan
      </p>
    </footer>
  );
};

const NavLinks = () => {
  const links = [
    {
      title: "Jobs",
      to: "/",
    },
    {
      title: "About Us",
      to: "/",
    },
    {
      title: "Contact Us",
      to: "/",
    },
  ];
  return (
    <div className=" w-fit">
      <h1 className="text-xl font-bold">Work in Japan</h1>
      <hr className=" w-24 bg-red-500 h-[2px] border-0 mb-3 mt-5" />
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:text-red-500 mb-3 ease-out duration-300 cursor-pointer"
          >
            {link.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="space-y-4 flex flex-col justify-center">
      <IconWithLabel label={"Chuo City, Tokyo 104-0045, Japan"}>
        <FaMapMarkerAlt />
      </IconWithLabel>
      <IconWithLabel label={"+81 1234567890"}>
        <FaPhoneAlt />
      </IconWithLabel>
      <IconWithLabel label={"support@workinjapan.com"}>
        <MdEmail />
      </IconWithLabel>
    </div>
  );
};

const IconWithLabel = ({ children, label }) => {
  return (
    <div className="flex items-center gap-3 text-xl text-gray-700 ">
      <div className="bg-gray-300 p-2 rounded-full">{children}</div>
      <span>{label}</span>
    </div>
  );
};
const SocialLinks = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-3 ">
        <LogoContainer>
          <FaFacebookF />
        </LogoContainer>
        <LogoContainer>
          <FaTwitter />
        </LogoContainer>
        <LogoContainer>
          <FaLinkedinIn />
        </LogoContainer>
        <LogoContainer>
          <FaGithub />
        </LogoContainer>
      </div>
    </div>
  );
};

const LogoContainer = ({ children }) => {
  return (
    <div className="text-xl text-gray-400 hover:text-red-600 hover:border-red-500 cursor-pointer border-2 border-gray-400 p-2 rounded-full">
      {children}
    </div>
  );
};

export default Footer;
