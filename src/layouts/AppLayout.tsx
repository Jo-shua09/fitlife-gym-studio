import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="w-full max-w-[180rem] m-auto">
      <Navbar />
      <div className="w-full max-w-[140rem] m-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
