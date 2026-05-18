import React from "react";
import Navbar from "@/app/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;