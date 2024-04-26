const CustomButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-6 ease-out duration-300 rounded"
    >
      {children}
    </button>
  );
};

export default CustomButton;
