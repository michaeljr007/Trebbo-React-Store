import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ProductPage from "./Pages/ProductPage";
import AccountPage from "./Pages/AccountPage";
import AllProducts from "./Pages/AllProducts";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import CartPage from "./Pages/CartPage";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";

function App() {
  // Preloader state
  const [isloading, setIsLoading] = useState(true);

  // Preloader timeout
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fakeDataFetch();
  }, []);

  return (
    // Show Preloader while isLoading is true
    <div className="App">
      {isloading ? (
        <span>
          <Loader />
        </span>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/accountpage" element={<AccountPage />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cartpage" element={<CartPage />} />
        </Routes>
      )}
    </div>
  );
}
export default App;
