import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const CartPage = () => {
  // Get products from state
  const products = useSelector((state) => state);

  // Map through to get total price
  let total = 0;
  products.Products.cartItems.map((item) => {
    total += item.price;
    return total;
  });

  return (
    <div>
      {/* Display cart items if Array > 0 */}
      {products.Products.cartItems.length > 0 ? (
        <div className="p-6">
          <h1>
            <Link to={"/"}>
              <span className="text-2xl">
                <FiArrowLeft />
              </span>
            </Link>
          </h1>
          <div className="my-5 text-xl lg:text-2xl">
            <h1>My Cart</h1>
          </div>
          <div className="my-5">
            <p>Here's all products added to your Cart</p>
          </div>

          {/* Map through cartItems and pass in CartItem component */}
          <div className="bg-slate-100 rounded-l-3xl py-5 my-5 mx-3">
            {products.Products.cartItems.map((item, id) => {
              return <CartItem key={id} item={item} />;
            })}
          </div>
          <div className="mb-7">
            <h1>Total Price of Products: ${total}</h1>
          </div>
          <span className="bg-[#A80ACF] text-center self-center items-center justify-center text-white rounded py-2 px-4 my-4">
            Proceed
          </span>
        </div>
      ) : (
        // Display if cartItems < 0
        <div className="text-center self-center items-center justify-center">
          <h1 className="text-center my-5 font-bold">Add Items To Your Cart</h1>
          <Link to={"/"}>
            <span className="bg-[#A80ACF] text-white rounded py-2 px-4 my-4">
              Home
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
