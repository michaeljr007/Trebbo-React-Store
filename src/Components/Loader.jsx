import React from "react";
import loader from "../img/20231010_075828_0000-removebg-preview.png";

const Loader = () => {
  return (
    <div>
      <span>
        <img
          className="my-[15rem] lg:my-[19rem] ml-[7.95rem] md:ml-[20rem] lg:ml-[37rem] w-[120px] md:w-[150px]"
          src={loader}
          alt="loader"
        />
      </span>
    </div>
  );
};

export default Loader;
