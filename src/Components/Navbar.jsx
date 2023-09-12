import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between mt-[-3.9rem] items-center p-3 w-[90%] z-[100] absolute">
        <HamburgerMenu />
        <Link to={"/"}>
          <h1 className="text-black text-2xl md:text-4xl font-bold ml-[0.9rem] mt-[-0.7rem] cursor-pointer">
            Trebbo
          </h1>
        </Link>
        <div>
          <Link to={"/signin"}>
            <button className="group relative mt-[-0.8rem] md:mt-0 mr-[-2.3rem] md:mr-[-5rem] lg:mr-[-10rem] overflow-hidden rounded-[0.5rem] cursor-pointer py-[0.3rem] text-white bg-[#A80ACF] shadow px-4">
              <div className="absolute inset-0 w-0 bg-purple-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative font-semibold text-[1rem] md:text-[1.3rem] text-white group-hover:text-white">
                Sign In
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
