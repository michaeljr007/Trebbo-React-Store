import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CartDetails from "./CartDetails";
import Products from "./Products";

const Row = ({ title, rowID, url }) => {
  // Data state
  const [data, setData] = useState([]);

  // Get products form Api and save in state
  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((result) => setData(result.products));
  }, []);

  // Onclick scroll function
  const scrollLeft = () => {
    let slider = document.querySelector("#slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    let slider = document.querySelector("#slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div>
        <CartDetails />

        {/* Display Products if data length > 0 */}
        {data && data.length > 0 ? (
          <div className="mt-[0.5rem]">
            <h2 className="text-black font-bold md:text-xl p-4">{title}</h2>
            <div className="items-center relative flex group">
              <MdChevronRight
                onClick={scrollLeft}
                className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                size={40}
              />
              <div
                id={"slider" + rowID}
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth hide-scroll-bar relative"
              >
                {/* Map through data and pass through products component */}
                {data.map((item, id) => (
                  <Products item={item} key={id} />
                ))}
              </div>
              <MdChevronLeft
                onClick={scrollRight}
                className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                size={40}
              />
            </div>
          </div>
        ) : (
          /* Display if data length < 0 */
          <h6>Please Check Connection</h6>
        )}
      </div>
    </>
  );
};

export default Row;
