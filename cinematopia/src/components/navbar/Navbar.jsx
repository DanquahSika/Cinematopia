import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchicon from "../../assets/img/search.svg";
import hamburgerIcon from "../../assets/img/hamburger.svg";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Popular", link: "/trending" },
    { name: "Movies", link: "/movies" },
    { name: "TV Shows", link: "/tvshows" },
    { name: "Search", link: "/search" },
  ];
  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div
      className="shadow-md w-full fixed top-0 left-0"
      style={{ color: "#ea8f11" }}
    >
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
        <div className=" cursor-pointer">
          <span className=" mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img src={hamburgerIcon} alt="Menu" />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              {link.name === "Search" ? (
                <Link
                  to={link.link}
                  onClick={toggleMenu}
                  className=" hover:text-gray-400 duration-500 flex items-center"
                >
                  <img src={searchicon} alt="Search" className="w-6 h-6 mr-2" />
                  {link.name}
                </Link>
              ) : (
                <Link
                  to={link.link}
                  onClick={toggleMenu}
                  className=" hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
