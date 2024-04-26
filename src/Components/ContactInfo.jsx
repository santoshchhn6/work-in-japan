import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex gap-8 flex-col justify-center">
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
      <div className="bg-gray-300 p-3 rounded-full">{children}</div>
      <span>{label}</span>
    </div>
  );
};

export default ContactInfo;
