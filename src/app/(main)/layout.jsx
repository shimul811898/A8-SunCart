import React from "react";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;