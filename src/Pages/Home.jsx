import React from "react";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import CartDetails from "../Components/CartDetails";

const Home = () => {
  return (
    <>
      <Navbar />
      <CartDetails />
      <Main />
    </>
  );
};

export default Home;
