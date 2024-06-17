import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const navItem = [
    "Home",
    "Services",
    "Courses",
    "Team",
    "Events",
    "Register Now!",
  ];

  return (
    <nav className="Container w-[100%] bg-[#7a6ad8] text-white py-4 fixed top-0 left-0 flex items-center justify-between z-10">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold pe-6 border-r ">SCHOLAR</h1>
        <form className="relative " action="">
          <input
            className=" ms-6 px-5 py-3 max-w-72 bg-[#FFFFFF1A]  placeholder:text-[#F1F0FE] placeholder:text-sm rounded-full"
            type="text"
            placeholder="Type Something"
          />
          <i className="absolute bottom-4 right-0 px-5">
            <FaSearch />
          </i>
        </form>
      </div>
      <ul>
        {navItem.map((item, i) => {
          return (
            <li key={i} className="inline-block mx-5 text-base ">
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
