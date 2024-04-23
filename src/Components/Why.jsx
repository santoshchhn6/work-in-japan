import CustomLayout from "./CustomLayout";
import currency from "../assets/currency.jpg";
import technology from "../assets/technology.png";
import culture from "../assets/culture.jpg";

const Why = () => {
  const lists = [
    {
      title: "High Salaries & Benefits",
      desc: "Japan offers competitive salaries with strong benefits packages.",
      img: currency,
    },
    {
      title: "Cutting-Edge Technology",
      desc: "Be at the forefront of innovation and work with leading technologies.",
      img: technology,
    },
    {
      title: "Rich Culture & History",
      desc: "Immerse yourself in a unique culture with a rich history.",
      img: culture,
    },
  ];
  return <CustomLayout heading={"Why Work in Japan?"} lists={lists} />;
};

export default Why;
