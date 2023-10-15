import React from "react";
import loader from "../img/20231010_075828_0000-removebg-preview.png";

const Loader = () => {
  return (
    <div className="h-[100vh] self-center items-center object-center justify-center content-center text-center w-[100vw] bg-white">
      <div className="py-10">
        <span>
          <img
            className="mt-[5rem] lg:mt-[19rem] md:ml-[8rem] lg:ml-[16rem] w-[560px] h-[420px] md:w-[150px]"
            src={loader}
            alt="loader"
          />
        </span>
      </div>
    </div>
  );
};

export default Loader;
