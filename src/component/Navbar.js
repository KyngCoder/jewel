import React from "react";
import { GiHamburgerMenu, GiDiamondRing } from "react-icons/gi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex justify-between items-center p-4 black primary-color font">
      <div className="flex justify-start items-center">
        <h2 className="text-2xl   text-white">Love Jewellery</h2>
      </div>
      <ul className="flex-1 hidden md:flex text-lg justify-center items-center">
        <li className="m-2 hover:text-yellow-400">
          <a href="#home">Home</a>
        </li>
        <li className="m-2 hover:text-yellow-400">
          <a href="#about">About</a>
        </li>
        <li className="m-2 hover:text-yellow-400">
          <a href="#menu">Menu</a>
        </li>
        <li className="m-2 hover:text-yellow-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-end items-center text-lg">
        <a
          className="text-white mx-2  hover:text-yellow-300 duration-500 ease"
          href="#login"
        >
          login
        </a>
        <div className="bg-gray-500 h-6 w-0.5" />
        <a
          className="text-white mx-2 hover:text-yellow-300 duration-500 "
          href="/"
        >
          Place order
        </a>
      </div>
      <div>
        <GiHamburgerMenu className="text-white flex md:hidden " onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-screen black duration-200 ease-out z-10 flex__center slide-bottom">
            <GiDiamondRing
              className=" text-white absolute top-0 right-10 mb-8 mt-4 text-2xl cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="">
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#menu">Menu</a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#awards">Awards</a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
