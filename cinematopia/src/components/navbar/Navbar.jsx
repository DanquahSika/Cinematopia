import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchicon from "../../assets/img/search.svg";
import hamburgerIcon from "../../assets/img/hamburger.svg";
import logo from "../../assets/img/cinelogo.png";

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
    <div className=" w-full h-16" style={{ color: "#fef6e6" }}>
      <div className="md:flex items-center justify-between bg-transparent  md:px-10 mt-5">
        <div className=" cursor-pointer">
          <span className="">
            <a href="/">
              <img
                src={logo}
                alt="cinematopialogo"
                className="h-12 absolute top-2"
                style={{ width: "12.5rem" }}
              />
            </a>
          </span>
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <img src={hamburgerIcon} alt="Menu" />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0  absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0">
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
