import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const CartPage = () => {
  const products = useSelector((state) => state);
  const navigate = useNavigate();

  let total = 0;
  products.Products.map((item) => {
    total += item.price;
    return total;
  });

  function navigateHome() {
    navigate("/");
  }

  function returnHome() {
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
      {products.Products.length > 0 ? (
        <div className="p-6">
          <h1>
            <span className="text-2xl">
              <FiArrowLeft onClick={returnHome} />
            </span>
          </h1>
          <div className="my-5 text-xl lg:text-2xl">
            <h1>My Cart</h1>
          </div>
          <div className="my-5">
            <p>Here's all products added to your Cart</p>
          </div>
          <div className="bg-slate-100 rounded-l-3xl py-5 my-5 mx-3">
            {products.Products.map((item) => {
              return <CartItem item={item} />;
            })}
          </div>
          <div className="mb-7">
            <h1>Total Price of Products: ${total}</h1>
          </div>
          <span
            onClick={navigateHome}
            className="bg-[#A80ACF] text-center self-center items-center justify-center text-white rounded py-2 px-4 my-4"
          >
            Proceed
          </span>
        </div>
      ) : (
        <div className="text-center self-center items-center justify-center">
          <h1 className="text-center my-5 font-bold">Add Items To Your Cart</h1>
          <span
            onClick={navigateHome}
            className="bg-[#A80ACF] text-white rounded py-2 px-4 my-4"
          >
            Home
          </span>
        </div>
      )}
    </div>
  );
};

export default CartPage;
