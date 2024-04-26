import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const JobSearch = ({ onSubmit }) => {
  const [value, setValue] = useState();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <form onSubmit={handleOnSubmit} className="flex justify-center mb-5">
      <div className="w-full sm:w-96 md:w-[400px] border-2 flex justify-between items-center bg-white pr-3 rounded-lg shadow-md">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-transparent w-full  outline-none py-2 px-4  text-xl text-gray-700"
        />
        <IoSearchSharp
          size={30}
          className="text-gray-600 hover:text-red-500 ease-out duration-300 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default JobSearch;
