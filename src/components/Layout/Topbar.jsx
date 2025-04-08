import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="md:flex items-center space-x-4 hidden">
          <a href="" className="hover:text-gray-300">
            <FaMeta className="h-5 w-5" />
          </a>
          <a href="" className="hover:text-gray-300">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="" className="hover:text-gray-300">
            <FaTwitter className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>

        <div className="text-sm hidden md:block">
          <a href="tel:+9862130453" className="hover:text-gray-300">9862130453</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
