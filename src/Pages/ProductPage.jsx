import React from "react";
import { useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/slices/ProductSlice";
import { removeCurrentProduct } from "../redux/slices/CurrentProductSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  // Get products from state
  const products = useSelector((state) => state);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const profile = products.Profile;

  // Assign current product in array to variable
  const singleProduct = products.CurrentProduct.currentProduct[0];

  // Navigate home
  function returnHome() {
    navigate("/");

    // Remove current product
    dispatch(removeCurrentProduct());
  }

  // Show Alert onClick
  function showAlert() {
    const mainDiv = document.querySelector(".main-div");
    const secondDiv = document.querySelector(".second-div");
    const alertDiv = document.createElement("div");
    alertDiv.innerHTML = `
        <div class='text-white bg-[#A80ACF] rounded-lg py-3 px-8 mx-3 my-1'>
        <h1 class='font-bold text-[0.9rem]'>Item Added to Cart</h1>
        </div> 
    `;

    mainDiv.insertBefore(alertDiv, secondDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  }

  // Add to cart
  function addToCart() {
    if (profile.length > 0) {
      dispatch(
        addProduct({
          id: singleProduct.id,
          title: singleProduct.title,
          description: singleProduct.description,
          price: singleProduct.price,
          thumbnail: singleProduct.thumbnail,
        })
      );
      showAlert();
    } else {
      alert("Please Log in to add to cart");
    }
  }

  // Overview div to display when clicked
  const overviewDiv = `
       <span class='mb-[3rem]'>
          <img src=${singleProduct.thumbnail} class='mb-[3rem] lg:ml-[33rem] block lg:h-[180px] lg:mx-[5rem]"' alt='' />
          <div class="mb-[1rem] my-3">
              <p>${singleProduct.description}</p>
            </div>
          <span class='py-2 px-4 cart-btn text-white rounded-lg bg-[#A80ACF]'>Add To Cart</span>
       </span>  

  `;

  // Payment div to display when clicked
  const paymentDiv = `
       <div class='text-black'>
       <h1 class='my-2 py-2 font-bold text-lg'>We accept multiple forms of payment</h1>
       <p class='my-1 mx-1 mb-[3rem]'>Click add to cart to begin payment process</p>
       </div>  

  `;

  // Delivery div to display when clicked
  const deliveryDiv = `
       <div class='text-black'>
       <h1 class='my-2 py-2 font-bold text-lg'>We ship nation wide within 4-5 business days </h1>
       <p class='my-1 mx-1 mb-[3rem]'>Make payment to begin delivery process process</p>
       </div>  

  `;

  // Display overview div
  function overview(target) {
    document.querySelector(".conditionalDiv").innerHTML = overviewDiv;

    const payment = document.querySelector(".payment");
    payment.classList.remove("active");
    const delivery = document.querySelector(".delivery");
    delivery.classList.remove("active");

    if (target.classList.contains("active") === false) {
      target.classList.add("active");
    }
  }

  // Display payment div
  function payment(target) {
    document.querySelector(".conditionalDiv").innerHTML = paymentDiv;

    const overview = document.querySelector(".overview");
    overview.classList.remove("active");
    const delivery = document.querySelector(".delivery");
    delivery.classList.remove("active");

    target.classList.add("active");
  }

  // Display delivery div
  function delivery(target) {
    document.querySelector(".conditionalDiv").innerHTML = deliveryDiv;

    const overview = document.querySelector(".overview");
    overview.classList.remove("active");
    const payment = document.querySelector(".payment");
    payment.classList.remove("active");

    target.classList.add("active");
  }

  return (
    <div className="main-div">
      {/* Display if array length > 0 */}
      {products.CurrentProduct.currentProduct.length > 0 ? (
        <div className="justify-center second-div self-center items-center text-center">
          <div className="flex justify-between p-1 px-3 py-1 my-2">
            <span className="text-2xl">
              <FiArrowLeft onClick={returnHome} />
            </span>

            {/* Navigate to shopping cart */}
            <span className="text-2xl">
              <FiShoppingCart
                onClick={() => {
                  if (profile.length > 0) {
                    navigate("/cartpage");
                    // Remove current product
                    dispatch(removeCurrentProduct());
                  } else {
                    alert("Please Log in to view cart");
                  }
                }}
              />
            </span>
          </div>
          <div>
            <h1 className="text-2xl mx-1 font-bold my-1 mb-6 text-center items-center">
              {singleProduct.title}
            </h1>
          </div>
          <div className="flex my-5 justify-evenly">
            {/* Overview click event */}
            <span
              onClick={(e) => overview(e.target)}
              className="overview active"
            >
              Overview
            </span>

            {/* Payment click event */}
            <span className="payment" onClick={(e) => payment(e.target)}>
              Payment
            </span>

            {/* Delivery click event */}
            <span onClick={(e) => delivery(e.target)} className="delivery">
              Delivery
            </span>
          </div>
          <div className="conditionalDiv p-4 py-4">
            <span className="mb-[3rem]">
              <img
                src={singleProduct.thumbnail}
                className="mb-[3rem] lg:ml-[33rem] block lg:h-[180px] lg:mr-[-15rem]"
                alt=""
              />
            </span>
            <div className="mb-[1.5rem] my-4">
              <p>{singleProduct.description}</p>
            </div>

            <span
              onClick={addToCart}
              className="py-3 text-white px-4 rounded-lg bg-[#A80ACF]"
            >
              Add To Cart
            </span>
          </div>
        </div>
      ) : (
        // Display if clickedProduct array length < 0
        <div className="text-center content-center p-2 my-6 self-center items-center">
          <h1>No Product Clicked</h1>
          <p className="mb-5">Please Click on a Product and Check Back</p>
          <span
            onClick={returnHome}
            className="self-center my-4 text-center py-2 px-4 bg-[#A80ACF] rounded-lg text-white"
          >
            Home
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
