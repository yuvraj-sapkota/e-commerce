import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);

    console.log("The search term is ", searchTerm)
  };

  return (
    <div
      className={` flex items-center justify-center transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full h-24 z-50 bg-white" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={(e)=> handleSubmit(e)}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search"
              className="border border-black bg-gray-100 px-4 py-2 pl-2 rounded-lg outline-none w-full placeholder:text-gray-700"
            />
            <button
              className="absolute top-2 text-gray-900 hover:text-gray-600 right-2"
              type="submit"
            >
              <CiSearch className="w-5 h-5 " />
            </button>
          </div>
          <button type="submit" onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose className="w-6 h-6 text-gray-900 ml-2 hover:text-gray-600 transition" />
          </button>
        </form>
      ) : (
        <button>
          <CiSearch className="w-5 h-5 " onClick={() => setIsOpen(!isOpen)} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
