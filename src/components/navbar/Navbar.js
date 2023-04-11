import React from "react";

import './navbar.css';

const Navbar = ({ activeFilter, onFilterClick }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My Store</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          onClick={() => console.log("mobile menu clicked")}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <ul className="flex flex-wrap">
            <li
              className={`mr-4 cursor-pointer hover:text-white ${
                activeFilter === "all" ? "text-white font-bold" : "text-gray-300"
              }`}
              onClick={() => onFilterClick("all")}
            >
              All
            </li>
            <li
              className={`mr-4 cursor-pointer hover:text-white ${
                activeFilter === "electronics" ? "text-white font-bold" : "text-gray-300"
              }`}
              onClick={() => onFilterClick("electronics")}
            >
              Electronics
            </li>
            <li
              className={`mr-4 cursor-pointer hover:text-white ${
                activeFilter === "jewelery" ? "text-white font-bold" : "text-gray-300"
              }`}
              onClick={() => onFilterClick("jewelery")}
            >
              Jewelery
            </li>
            <li
              className={`mr-4 cursor-pointer hover:text-white ${
                activeFilter === "men's clothing" ? "text-white font-bold" : "text-gray-300"
              }`}
              onClick={() => onFilterClick("men's clothing")}
            >
              Men's Clothing
            </li>
            <li
              className={`mr-4 cursor-pointer hover:text-white ${
                activeFilter === "women's clothing" ? "text-white font-bold" : "text-gray-300"
              }`}
              onClick={() => onFilterClick("women's clothing")}
            >
              Women's Clothing
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;