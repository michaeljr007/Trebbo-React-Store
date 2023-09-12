import { FiSearch } from "react-icons/fi";
import Row from "../Components/Row";
import MainRow from "./MainRow";
const products = "https://dummyjson.com/products";
const phones = "https://dummyjson.com/products/category/smartphones";
const laptops = "https://dummyjson.com/products/category/laptops";
const skinCare = "https://dummyjson.com/products/category/skincare";
const womenShoes = "https://dummyjson.com/products/category/womens-shoes";
const menShoes = "https://dummyjson.com/products/category/mens-shoes";

const Main = () => {
  return (
    <div>
      <div className="mt-[4rem]">
        <div className="p-5 ml-[0.4rem] mr-[2rem] mt-1">
          <h1 className="font-semibold text-lg mb-1 md:text-xl">
            Hi, <span className="text-purple-800">Olivia</span>
          </h1>
          <h1 className="font-bold text-[1.5rem] md:text-2xl">
            What are you searching for?
          </h1>
        </div>
        <div>
          <label
            htmlFor="email"
            className="relative md:left-[-4rem] lg:left-[-13.2rem] mt-2 mb-[1.7rem] text-gray-400 mx-[1.7rem] md:mx-[6rem] lg:mx-[15rem] focus-within:text-gray-600 block"
          >
            <FiSearch className="pointer-events-none w-8 h-[1.6rem] absolute top-1/2 transform -translate-y-1/2 left-3" />

            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Items"
              className="form-input border p-3 rounded-[1rem] pl-[3.5rem] w-full"
            />
          </label>
        </div>

        <div className="pb-6 pt-7 rounded-t-[2rem] bg-gray-100">
          <h1 className="font-semibold text-center text-white py-1 my-1 rounded-lg px-4 mx-[12.8rem] lg:mx-[29rem] ml-6 bg-[#A80ACF]">
            Today's Picks
          </h1>

          <MainRow rowID="1" url={products} />

          <Row rowID="1" title="Trending Products" url={products} />
          <Row rowID="2" title="Laptops" url={laptops} />
          <Row rowID="3" title="Smart Phones" url={phones} />
          <Row rowID="4" title="Skin Care" url={skinCare} />
          <Row rowID="5" title="Women's shoes" url={womenShoes} />
          <Row rowID="6" title="Men's shoes" url={menShoes} />
        </div>
        <h6 className="text-center font-bold text-[0.9rem] md:text-[1rem] mt-2 text-black pb-5">
          Designed by:{" "}
          <span className="text-purple-600 text-[1rem] md:text-[1.2rem]">
            Amy-Tech{" "}
          </span>{" "}
          <br />
          Built By:{" "}
          <span className="text-purple-600 text-[1rem] md:text-[1.2rem]">
            {" "}
            Michael-Isih Dev
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Main;
