import Why from "../Components/Why";
import Hero from "../Components/Hero";
import Cities from "../Components/Cities";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className=" bg-gray-100">
      <div className="max-w-[1920px] mx-auto">
        <Header />

        <Hero />

        <main className="px-12 py-8">
          <Why />
          <Cities />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
