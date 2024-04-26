const CustomTextarea = ({ onChange, placeholder = "", className = "" }) => {
  return (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      //   cols="30"
      //   rows="10"
      className={`w-full outline-none bg-gray-200 text-2xl py-2 px-4 rounded-md resize-none ${className}`}
    />
  );
};

export default CustomTextarea;
