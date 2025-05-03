import { Close, Menu } from "@mui/icons-material";
import { Button } from "./Buttons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    window.onscroll = () => {
      setIsOpen(false);
    };
  });

  return (
    <div className="w-full section-page !py-5">
      <div className="w-full flex items-center justify-between gap-10">
        <div className="flex items-center gap-x-2 w-full">
          <img loading="lazy" src="logo-bg.png" alt="logo image" className="w-10 h-10" />
          <h4 className="text-3xl font-bold">FitLife studio</h4>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <Menu className="!text-4xl font-bold" /> : <Close className="!text-4xl font-bold" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:w-full md:flex md:justify-center">
          <ul className="flex text-2xl font-semibold items-center justify-center gap-x-6">
            <li onClick={() => handleNavigation("/")} className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">
              home
            </li>
            <li onClick={() => handleNavigation("/about")} className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">
              about
            </li>
            <li onClick={() => handleNavigation("/contact")} className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">
              contact us
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          <div className="h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col text-3xl font-semibold items-center justify-center gap-y-10">
              <li onClick={() => handleNavigation("/")} className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">
                home
              </li>
              <li onClick={() => handleNavigation("/about")} className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">
                about
              </li>
              <li onClick={() => handleNavigation("/contact")} className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">
                contact us
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:w-full md:flex md:place-content-end">
          <Button name="join us" wFull={false} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
