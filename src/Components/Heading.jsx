const Heading = ({ className, children }) => {
  return (
    <h1
      className={`my-5 md:my-16 text-center text-3xl md:text-5xl font-bold text-red-500 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
