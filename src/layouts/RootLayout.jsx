import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 max-w-screen-xl w-full mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
