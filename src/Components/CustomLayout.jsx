const CustomLayout = ({ heading, lists }) => {
  return (
    <section className=" ">
      <h2 className="my-10 md:my-16 text-center text-3xl md:text-5xl font-bold text-gray-600">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {lists?.map((list, index) => (
          <Panel
            key={index}
            title={list?.title}
            desc={list?.desc}
            img={list?.img}
          />
        ))}
      </div>
    </section>
  );
};

const Panel = ({ title, desc, img }) => {
  return (
    <div className="border-2 border-gray-200 shadow-md p-5 rounded-lg cursor-pointer hover:scale-105 ease-out duration-300">
      <img
        src={img}
        alt=""
        className="w-full aspect-[5/3] object-cover rounded-md"
      />
      <h3 className="my-3 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
};

export default CustomLayout;
