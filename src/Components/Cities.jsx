import CustomLayout from "./CustomLayout";
import tokyo from "../assets/tokyo.jpg";
import osaka from "../assets/osaka.jpg";
import kyoto from "../assets/kyoto.jpg";

const Cities = () => {
  const lists = [
    {
      title: "Tokyo",
      desc: "The bustling capital with endless career opportunities.",
      img: tokyo,
    },
    {
      title: "Osaka",
      desc: "A vibrant city known for its energetic culture and food scene.",
      img: osaka,
    },
    {
      title: "Kyoto",
      desc: "Experience tradition and beauty in the ancient capital.",
      img: kyoto,
    },
  ];
  return <CustomLayout heading={"Popular Cities for Work"} lists={lists} />;
};

export default Cities;
