import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="container  mx-auto px-6 py-4 flex items-center justify-between">
      <div>
        <Link to="/" className="text-2xl font-medium">
          Bhandar
        </Link>
      </div>
      <div className="space-x-6 hidden md:flex">
        <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
          Men
        </Link>
        <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
          Women
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
          <FaUser className="w-5 h-5"/>
        </Link>

        <button className="relative hover:text-gray-600" onClick={()=>setDrawerOpen(!drawerOpen)}>
            <FaCartShopping className="w-5 h-5"/>
            <span className="absolute -top-5 bg-[#ea2e0e] text-white rounded-full px-1.5  ">4</span>
        </button>

        <SearchBar/>

        <button className="hover:text-gray-600 md:hidden">
            <HiBars3 className="h-6 w-6 "/>
        </button>
       
      </div>

      <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
    </div>
  );
};

export default Navbar;
