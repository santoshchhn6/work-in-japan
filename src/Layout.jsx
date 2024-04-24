import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Layout = () => {
  return (
    <div className=" bg-gray-100">
      <div className="max-w-[1920px] mx-auto">
        <Header />

        <div className="min-h-screen px-12 py-8">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
