import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 bg-white w-3/4 sm:w-1/2 md:w-1/4  h-full shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <p className="text-xl font-medium"> Your Cart</p>
          <button>
            <IoMdClose
              className="h-7 w-7 hover:text-gray-600 "
              onClick={() => setDrawerOpen(!drawerOpen)}
            />
          </button>
        </div>

        <div className=" flex-grow  p-4 overflow-y-auto">
          <CartContents />
        </div>

        <div className="sticky bottom-0 bg-white  ">
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
            Checkout
          </button>
          <p className="text-sm tracking-tighter text-gray-600 m-2 text-center">
            Shipping, taxes, and discount codes calculated and checkout
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
