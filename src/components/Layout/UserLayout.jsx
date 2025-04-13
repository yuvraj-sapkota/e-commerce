import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import HomePage from "../../Pages/HomePage";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
