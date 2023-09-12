import React from "react";
import { useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const products = useSelector((state) => state);
  const navigate = useNavigate();
  const arrayOfProducts = products.Products;

  const clickedProduct = arrayOfProducts.filter((item) => item.clickedProduct);

  function returnHome() {
    navigate("/");
    window.location.reload();
  }

  const product = clickedProduct[0];

  const overviewDiv = `
       <span class='mb-[3rem]'>
          <img src=${product?.thumbnail} class='mb-[3rem] lg:ml-[33rem] block lg:h-[180px] lg:mx-[5rem]"' alt='' />
          <div class="mb-[1rem] my-3">
              <p>${product?.description}</p>
            </div>
          <button class='py-2 px-4 text-white rounded-lg bg-[#A80ACF]'>Add To Cart</button>
       </span>  

  `;

  const paymentDiv = `
       <div class='text-black'>
       <h1 class='my-2 py-2 font-bold text-lg'>We accept multiple forms of payment</h1>
       <p class='my-1 mx-1 mb-[3rem]'>Click add to cart to begin payment process</p>
       </div>  

  `;

  const deliveryDiv = `
       <div class='text-black'>
       <h1 class='my-2 py-2 font-bold text-lg'>We ship nation wide within 4-5 business days </h1>
       <p class='my-1 mx-1 mb-[3rem]'>Make payment to begin delivery process process</p>
       </div>  

  `;

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

  function payment(target) {
    document.querySelector(".conditionalDiv").innerHTML = paymentDiv;

    const overview = document.querySelector(".overview");
    overview.classList.remove("active");
    const delivery = document.querySelector(".delivery");
    delivery.classList.remove("active");

    target.classList.add("active");
  }

  function delivery(target) {
    document.querySelector(".conditionalDiv").innerHTML = deliveryDiv;

    const overview = document.querySelector(".overview");
    overview.classList.remove("active");
    const payment = document.querySelector(".payment");
    payment.classList.remove("active");

    target.classList.add("active");
  }

  return (
    <div>
      {clickedProduct?.length > 0 ? (
        <div className="justify-center self-center items-center text-center">
          <div className="flex justify-between p-3 px-3 py-3 my-3">
            <span className="text-2xl">
              <FiArrowLeft onClick={returnHome} />
            </span>
            <span className="text-2xl">
              <FiShoppingCart onClick={() => navigate("/cartpage")} />
            </span>
          </div>
          <div>
            <h1 className="text-2xl mx-1 font-bold my-4 py-2 mb-6 text-center items-center">
              {product?.title}
            </h1>
          </div>
          <div className="flex my-5 justify-evenly">
            <span
              onClick={(e) => overview(e.target)}
              className="overview active"
            >
              Overview
            </span>
            <span className="payment" onClick={(e) => payment(e.target)}>
              Payment
            </span>
            <span onClick={(e) => delivery(e.target)} className="delivery">
              Delivery
            </span>
          </div>
          <div className="conditionalDiv p-4 py-6">
            <span className="mb-[3rem]">
              <img
                src={product?.thumbnail}
                className="mb-[3rem] lg:ml-[33rem] block lg:h-[180px] lg:mr-[-15rem]"
                alt=""
              />
            </span>
            <div className="mb-[1.5rem] my-4">
              <p>{product?.description}</p>
            </div>

            <span className="py-3 text-white px-4 rounded-lg bg-[#A80ACF]">
              Add To Cart
            </span>
          </div>
        </div>
      ) : (
        <div>
          <h1>No Product Clicked</h1>
          <p>Please Click on a Product and Check Back</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
