import React from "react";
import loader from "../img/animation_lmyrk8gr_small.gif";

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
