import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CartDetails from "./CartDetails";
import Products from "./Products";

const MainRow = ({ rowID, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((result) => setData(result.products));
  }, []);

  const randomArray = [];

  for (let i = 0; i < 6; i++) {
    const randomProduct = data[Math.floor(Math.random() * data.length)];
    randomArray.push(randomProduct);
  }

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
        {data && data.length > 0 ? (
          <div className="mt-[0.5rem]">
            <div className="items-center relative flex group">
              <MdChevronRight
                onClick={scrollLeft}
                className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                size={40}
              />
              <div
                id={"slider" + rowID}
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
              >
                {randomArray.map((item, id) => (
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
          <h6>Please Check Connection</h6>
        )}
      </div>
    </>
  );
};

export default MainRow;
