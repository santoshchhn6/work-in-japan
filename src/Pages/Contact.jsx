import ContactInfo from "../Components/ContactInfo";
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import CustomTextarea from "../Components/CustomTextarea";
import Heading from "../Components/Heading";
import Logo from "../Components/Logo";
import about from "../assets/about.jpg";

const Contact = () => {
  return (
    <div>
      <Heading className={"my-3 md:my-10"}>Contact Us</Heading>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-3 ">
        <div className="w-full md:max-w-[500px] flex-1 flex gap-5 flex-col items-center border px-6 py-10 bg-white shadow-md">
          <CustomInput placeholder="Name" />
          <CustomInput placeholder="Email" />
          <CustomTextarea placeholder="Message" />
          <CustomButton>Send Message</CustomButton>
        </div>

        <div className="w-full md:max-w-[500px] flex-1 flex items-center  border px-6 py-10 bg-white shadow-md">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
