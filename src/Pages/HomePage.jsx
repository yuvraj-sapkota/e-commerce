import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCOllectionSection from "../components/Products/GenderCOllectionSection";
import NewArrivals from "../components/Products/NewArrivals";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <GenderCOllectionSection />
      <NewArrivals />
    </div>
  );
};

export default HomePage;
