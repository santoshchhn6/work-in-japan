import { useState } from "react";
import japan_flag from "../assets/japan_flag.png";
import uk_flag from "../assets/uk_flag.webp";
import Select from "react-select";
import { components } from "react-select";
const { SingleValue, Option } = components;

const Languages = () => {
  const [language, setLanguage] = useState("en");
  console.log({ language });
  const languagesLists = [
    {
      label: "English",
      value: "en",
      image: uk_flag,
    },
    {
      label: "Japanese",
      value: "jp",
      image: japan_flag,
    },
  ];

  const handleChange = (selected) => {
    setLanguage(selected);
  };

  const defaultValue = {
    label: "English",
    value: "en",
    image: uk_flag,
  };

  return (
    <Select
      components={{ SingleValue: IconSingleValue, Option: IconOption }}
      defaultValue={defaultValue}
      options={languagesLists}
      onChange={handleChange}
    />
  );
};

const IconSingleValue = (props) => (
  <SingleValue {...props}>
    <OptionStyle image={props.data.image} label={props.data.label} />
  </SingleValue>
);

const IconOption = (props) => (
  <Option {...props}>
    <OptionStyle image={props.data.image} label={props.data.label} />
  </Option>
);

const OptionStyle = ({ image, label }) => {
  return (
    <div className="flex gap-3">
      <img
        src={image}
        className="border border-gray-400 rounded w-10 aspect-[3/2] object-fill"
      />
      {label}
    </div>
  );
};

export default Languages;
