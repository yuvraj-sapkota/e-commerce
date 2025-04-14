import React from "react";
import heroImage from "../../assets/heroImg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <div className="md:h-[600px] lg:h-[750px] h-[400px]   overflow-hidden mx-auto">
          <img
            src={heroImage}
            alt=""
            className="h-[100%] w-[100%] overflow-hidden object-cover object-top mx-auto"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/5 ">
          <div className="text-center  text-white p-6">
            <h1 className="uppercase text-4xl md:text-9xl font-bold -mb-4">
              Vacation <br /> Ready
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6 p-6">
              Explore our vaction-ready outfits with fast world wide shipping{" "}
            </p>
            <Link
              to="#"
              className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-red-500 hover:text-white"
            >
              Shop now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
