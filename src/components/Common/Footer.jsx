import { FaInstagram, FaMeta, FaTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
          <div>
            <h3 className="text-lg text-gray-800 mb-4"> Newsletter</h3>
            <p className=" text-gray-500 mb-4">
              Be the first to here about new products, exclusive events and
              online offers
            </p>
            <p className="font-medium text-sm text-gray-600 mb-6">
              Sign up and get 10% off on you first order
            </p>

            {/* newsletter form  */}

            <form className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* shop links  */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Shop</h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="hover:text-gray-500  transition-colors">
                  Men's top Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500  transition-colors">
                  Women's top Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500  transition-colors">
                  Men's bottom Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500  transition-colors">
                  Women's bottom Wear
                </Link>
              </li>
            </ul>
          </div>

          {/* support links  */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Support</h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="hover:text-gray-500  transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500  transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500  transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500  transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          {/* follow us  */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <FaMeta className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
            <div>
              <p className="text-gray-500">Call Us</p>
              <p>
                <IoCallOutline  className="inline-block mr-2"/>
                9862130453
              </p>
            </div>
          </div>
          {/* footer bottom  */}
        </div>
          <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm tracking-tighter text-center">2025, CompileTab. All Rights Reserved.</p>
          </div>
      </div>
    </>
  );
};

export default Footer;
