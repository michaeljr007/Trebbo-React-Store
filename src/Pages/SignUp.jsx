import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import TrebboImg from "../img/Trebboimg.png";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { addProfile } from "../redux/slices/ProfileSlice";

const SignUp = () => {
  // User State
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Add profile to state if user !== undefined
  useEffect(() => {
    if (user.family_name !== undefined) {
      dispatch(
        addProfile({
          lastName: user.family_name,
          firstName: user.given_name,
          email: user.email,
          img: user.picture,
        })
      );
    }
  }, [user]);

  // Navigate to home page if user !== undefined
  if (user.family_name !== undefined) {
    navigate("/");
  }

  // Navigate home
  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src={TrebboImg}
          alt="/"
        />
        <div className="fixed w-full px-4 py-10 z-50">
          <div className="text-white text-center items-center mt-[2rem] mb-1">
            <Link to={"/"}>
              <h1 className="text-3xl md:text-6xl mb-2 font-bold">Trebbo</h1>
            </Link>
            <p className="font-semibold md:text-lg">
              Your favourite online Store
            </p>
          </div>
          <div className="max-w-[320px] md:max-w-[500px] mx-auto mt-[2rem] md:mt-[-1rem] lg:mt-[6rem] py-10">
            <form className="w-full flex flex-col py-4">
              <label
                htmlFor="email"
                className="relative text-gray-400 focus-within:text-gray-600 block"
              >
                <HiOutlineMail className="pointer-events-none w-8 h-[1.7rem] absolute top-1/2 transform -translate-y-1/2 left-3" />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-input p-2 rounded my-1 pl-[3.5rem] w-full"
                />
              </label>

              <label
                htmlFor="email"
                className="relative text-gray-400 focus-within:text-gray-600 block"
              >
                <FiLock className="pointer-events-none w-8 h-[1.7rem] absolute top-1/2 transform -translate-y-1/2 left-3" />

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="form-input p-2 rounded my-1 pl-[3.5rem] w-full"
                />
              </label>

              <button
                onClick={goHome}
                className="group relative overflow-hidden rounded-[0.5rem] cursor-pointer py-2 text-white bg-[#A80ACF] shadow my-4"
              >
                <div className="absolute inset-0 w-0 bg-purple-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative font-semibold text-[1rem] text-white group-hover:text-white">
                  Sign Up
                </span>
              </button>

              <p className="py-8 md:text-lg text-center text-white">
                <span>Already have an account?</span>{" "}
                <Link
                  to={"/signin"}
                  className="text-[#A80ACF] hover:text-purple-800"
                >
                  Sign In
                </Link>
                {/* Sign In with google */}
                <div className="my-2 mx-9 md:mx-[8rem]">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      setUser(jwt_decode(credentialResponse.credential));
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              </p>
            </form>

            {/* Credits */}
            <h6 className="text-center font-bold text-[0.9rem] md:text-[1rem] text-white mt-[-2rem] pb-5">
              Designed by:{" "}
              <span className="text-purple-500 text-[1rem] md:text-[1.2rem]">
                AmaraUI{" "}
              </span>{" "}
              <br />
              Built By:{" "}
              <span className="text-purple-500 text-[1rem] md:text-[1.2rem]">
                {" "}
                Michael-Isih Dev
              </span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
