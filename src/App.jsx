import Cities from "./Components/Cities";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Why from "./Components/Why";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[1920px] mx-auto">
        <Header />
        <Hero />

        <main className="px-6 py-8">
          <Why />
          <Cities />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
