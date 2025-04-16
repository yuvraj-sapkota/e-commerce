import menscollection from "../../assets/menscollectionImage.jpg";
import girlscollectionImage from "../../assets/girlscollectionImage.jpg";
import { Link } from "react-router-dom";

const GenderCOllectionSection = () => {
  return (
    <>
      {/* <div className="flex flex-col sm:flex-row p-4 gap-4 justify-between">
        <div className=" overflow-hidden">
          <img
            src={girlscollectionImage}
            alt=""
            className="h-[100%] w-[100%] object-cover "
          />
        </div>
        <div className="  overflow-hidden">
          <img
            src={menscollection}
            alt=""
            className="h-[100%] w-[100%] object-cover "
          />
        </div>
      </div> */}

      <div className="py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* women's colelction  */}
          <div className="relative">
            <img
              src={girlscollectionImage}
              alt="girls collection"
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-white  p-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Women's Collection
              </h2>
              <Link
                to="/collections/all?gender=Women "
                className="text-gray-900 underline"
              >
                Show Now
              </Link>
            </div>
          </div>
          {/* men's colelction  */}
          <div className="relative">
            <img
              src={menscollection}
              alt="mens collection"
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-white  p-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Men's Collection
              </h2>
              <Link
                to="/collections/all?gender=men "
                className="text-gray-900 underline"
              >
                Show Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderCOllectionSection;
