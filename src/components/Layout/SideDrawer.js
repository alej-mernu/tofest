import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-yellow.png";
import Home from "../Icons/Home";

const SideDrawer = (props) => {
  return (
    <div
      className={`${props.className} transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 `}
    >
      <Link className="flex w-full items-center p-4 border-b" to="/">
        <img className="h-auto w-32 mx-auto" alt="ToFest" src={Logo} />
      </Link>
      <span className="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
        <span className="mr-2">
          <Home />
        </span>
        <Link to="/">Home</Link>
      </span>
      <span className="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
        <span className="mr-2">
          <Home />
        </span>
        <Link to="/terraces">Terraces</Link>
      </span>
    </div>
  );
};

export default SideDrawer;
