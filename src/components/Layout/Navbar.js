import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Link } from "react-router-dom";
import MenuIcon from "../Icons/MenuIcon";
import LogIcon from "../Icons/LogIcon";
import Bag from "../Icons/Bag";
import Logo from "../../assets/logo-yellow.png";
import SideDrawer from "./SideDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpen(false);
  });
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white h-20 border-b shadow-md font-serif">
        <div className="flex items-center pl-5">
          <div
            className={`md:hidden mr-2 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon className="w-8 h-8" />
          </div>
          <Link to="/">
            <img className="h-18 w-36 pt-2" src={Logo} alt="ToFest"/>
          </Link>
        </div>
        <div className="text-md flex items-center w-auto pr-8">
          <div className="hidden md:flex">
            <Link
              className="block mt-4 md:inline-block md:mt-0 hover:text-yellow-tofest mr-4"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block mt-4 md:inline-block md:mt-0 hover:text-yellow-tofest mr-4"
              to="/terraces"
            >
              Terraces
            </Link>
            <Link
              className="block mt-4 md:inline-block md:mt-0 hover:text-yellow-tofest mr-4"
              to="/about"
            >
              About
            </Link>
            <div className="flex pl-6 items-center">
              <Link className="pr-2" to="/">
                <span title="login">
                  <Bag className="inline-block fill-current hover:text-yellow-tofest" />
                </span>
              </Link>
              <Link className="pl-2" to="/login">
                <LogIcon className="inline-block fill-current hover:text-yellow-tofest" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div ref={ref}>
        <SideDrawer
          className={`${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        />
      </div>
    </div>
  );
};

export default Navbar;

// <Link className="yellow-tofest" to="/">
//         ToFest
//       </Link>
//       <div className="px-4 cursor-pointer md:hidden">
//         <MenuIcon />
//       </div>
//       <div className="pr-8 md:block hidden">
//         <Link className="p-4" to="/">
//           Home
//         </Link>
//         <Link className="p-4" to="/terraces">
//           Terrazas
//         </Link>
//         <Link className="p-4" to="/about">
//           About
//         </Link>
//         <Link className="p-4" to="/contact">
//           Contact
//         </Link>
//       </div>
