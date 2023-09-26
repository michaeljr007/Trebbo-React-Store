import React from "react";
import { useState } from "react";
const HamburgerMenu = () => {
  // Nav open state
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <nav>
          <section className="MOBILE-MENU flex">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-900 md:text-[1.3rem] my-8 uppercase">
                  Products
                </li>

                <li className="border-b border-gray-900 md:text-[1.3rem] my-8 uppercase">
                  About Us
                </li>

                <li className="border-b border-gray-900 md:text-[1.3rem] my-8 uppercase">
                  Contact Us
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
