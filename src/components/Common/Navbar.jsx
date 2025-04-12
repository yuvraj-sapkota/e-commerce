import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDrawer, setMobileDrawer] = useState(false);
  return (
    <>
      <div className="container  mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Bhandar
          </Link>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Mens
          </Link>
          <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Womens
          </Link>
          <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Top Wear
          </Link>
          <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Bottom Wear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className=" hover:text-gray-600">
            <FaUser className="w-5 h-5" />
          </Link>

          <button
            className="relative hover:text-gray-600"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <FaCartShopping className="w-5 h-5" />
            <span className="absolute -top-5 bg-[#ea2e0e] text-white rounded-full px-1.5  ">
              4
            </span>
          </button>

          <SearchBar />

          <button
            className="hover:text-gray-600 md:hidden"
            onClick={() => setMobileDrawer(!mobileDrawer)}
          >
            <HiBars3 className="h-6 w-6 " />
          </button>
        </div>

        <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </div>
      {/* Mobile navbar  */}
      <div
        className={`bg-white shadow-lg  transition-transform duration-300 md:hidden fixed top-0 h-full left-0 w-3/4  ${
          mobileDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <IoMdClose
            className="w-6 h-6"
            onClick={() => setMobileDrawer(false)}
          />
        </div>
        <hr />
        <div className=" p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className=" space-y-4">
            <Link to="" className="block text-gray-600 hover:text-black">
              Men
            </Link>
            <Link to="" className="block text-gray-600 hover:text-black">
              Women
            </Link>
            <Link to="" className="block text-gray-600 hover:text-black">
              Top Wear
            </Link>
            <Link to="" className="block text-gray-600 hover:text-black">
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
