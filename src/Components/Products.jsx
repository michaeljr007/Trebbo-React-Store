import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slices/ProductSlice";
import { addCurrentProduct } from "../redux/slices/CurrentProductSlice";
import { useNavigate } from "react-router-dom";

const Products = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const State = useSelector((state) => state);

  const profile = State.Profile;

  // Store product in state onClick to display on product page
  function productInfo() {
    dispatch(
      addCurrentProduct({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        thumbnail: item.thumbnail,
      })
    );

    // Navigate home on completion
    navigate("/productpage");
  }

  // Show Cart details onClick
  function showCart() {
    document.querySelector(".cart").classList.remove("hidden");
  }

  // Add to cart
  function addToCart() {
    // Check if logged in
    if (profile.length > 0) {
      dispatch(
        addProduct({
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          thumbnail: item.thumbnail,
        })
      );
      showCart();
    } else {
      alert("Please Log in to add to cart");
    }
  }

  return (
    <>
      <div className="w-[200px] sm:w-[200px] md:w-[240px] lg:w-[280] relative mt-4 cursor-pointer inline-block hover:bg-gray-200 h-[14rem] md:h-[17rem] rounded-[0.5rem] ml-1 md:ml-6 mr-1 md:mr-2 mb-2 overflow-hidden shadow-lg">
        <img
          onClick={productInfo}
          className="w-full h-[110px] lg:h-[140px]"
          src={item.thumbnail}
          alt=""
        />
        <div className="px-3 py-3">
          <div
            onClick={productInfo}
            className="font-bold text-[0.9rem] md:text-[1rem] mb-2"
          >
            {item.title}
          </div>
        </div>
        <div className="px-2 pt-1 flex items-center mt-[-1rem] justify-evenly">
          <span className="inline-block mt-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {`$${item.price}`}
          </span>
          <span
            // Add to cartItems in state onClick
            onClick={addToCart}
            className="btn bg-[#A80ACF] hover:bg-purple-700 rounded text-[0.8rem] text-white py-2 px-2 md:px-4 my-3"
          >
            Add to Cart
          </span>
        </div>
      </div>
    </>
  );
};

export default Products;
