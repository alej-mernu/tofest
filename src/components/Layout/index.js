import React from "react";
import Navbar from "./Navbar";
import Sidebar from "../Sidebar";
import Footer from "./Footer";

const Layout = ({ children = null }) => {
  return (
    <div className="flex flex-col w-full h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-3 shadow-lg flex flex-col md:flex-row h-full overflow-hidden">
        <Sidebar className="flex border-b p-3 items-center justify-center z-0 space-x-4 md:space-y-5 md:space-x-0 w-full h-24 md:h-full md:w-64 md:flex-col md:justify-start md:border-r">
          <div className="">hola</div>
          <div className="">filtros</div>
        </Sidebar>
        <div className="flex w-full h-full p-5 overflow-y-auto bg-gray-100">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
