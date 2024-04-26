const CustomInput = ({ onChange, placeholder = "", className = "" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full outline-none bg-gray-200 text-2xl py-2 px-4 rounded-md ${className}`}
    />
  );
};

export default CustomInput;
