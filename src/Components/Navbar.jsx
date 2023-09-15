import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const State = useSelector((state) => state);
  const profileArray = State.Profile;
  const profile = profileArray[0];

  return (
    <div>
      <div className="flex justify-between mt-[-3.9rem] items-center p-3 w-[96.6%] md:w-[97%] z-[100] absolute">
        <HamburgerMenu />
        <Link to={"/"}>
          <h1 className="text-black text-2xl md:text-4xl font-bold ml-[0.9rem] mt-[-0.7rem] cursor-pointer">
            Trebbo
          </h1>
        </Link>
        <div>
          {profileArray.length > 0 ? (
            <span>
              <img
                src={profile.img}
                width={"39.5px"}
                height={"39.5px"}
                className="rounded-[50%]"
                alt="profile"
              />
            </span>
          ) : (
            <Link to={"/signin"}>
              <button className="group relative mt-[-0.8rem] md:mt-0 mr-[-0.6rem] md:mr-[-1rem] lg:mr-[1rem] overflow-hidden rounded-[0.5rem] cursor-pointer py-[0.3rem] text-white bg-[#A80ACF] shadow px-4">
                <div className="absolute inset-0 w-0 bg-purple-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative font-semibold text-[1rem] text-white group-hover:text-white">
                  Sign In
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
