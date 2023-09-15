import React from "react";
import { useSelector } from "react-redux";
import { FiDelete } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const products = useSelector((state) => state);
  const navigate = useNavigate();

  let total = 0;
  products.Products.map((item) => {
    total += item.price;
    return total;
  });

  const removeCart = () => {
    document.querySelector(".cart").classList.add("hidden");
  };

  return (
    <>
      <div className="py-3 hidden cart z-50 ml-[0.6rem] md:ml-[1.1rem] lg:ml-[1.8rem] w-[95%] mt-[0.7rem] mx-2 bg-[#A80ACF] fixed top-[-1rem] rounded">
        <h6 className="text-center text-[0.9rem] flex justify-evenly md:text-[1.2rem] text-white">
          <span className="ml-[-1rem] lg:ml-[-19rem]">
            <p>
              <FiDelete
                className="text-[1.3rem] mt-[0.1rem]"
                onClick={removeCart}
              />
            </p>
          </span>{" "}
          <span className="ml-[-2.1rem] lg:ml-[-9rem]">
            Total Products : {products.Products.length} - Total Price :{" "}
            {products.Products.length > 0 ? <span>{`$${total}`}</span> : 0}
          </span>
          <span
            onClick={() => navigate("/cartpage")}
            className="text-white text-[1rem] self-center items-center justify-center ml-[-1.9rem]"
          >
            <FiShoppingCart />
          </span>
        </h6>
      </div>
    </>
  );
};

export default CartDetails;
