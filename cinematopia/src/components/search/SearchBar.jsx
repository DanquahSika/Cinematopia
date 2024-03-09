import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/cinelogo.png";
const SearchBar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center  lg:h-14 py-3 lg:py-0">
      <div className="logo mb-3 lg:mb-0 lg:mr-10">
        <Link to="/">
          <img src={logo} alt="logo" className="w-64" />
        </Link>
      </div>
      <div className="nav-links flex flex-wrap justify-center lg:justify-start">
        <Link to="/" className="mr-4 mb-2 lg:mb-0 hover:opacity-75">
          <span>Home</span>
        </Link>
        <Link to="/genre" className="mr-4 mb-2 lg:mb-0 hover:opacity-75">
          <span>Trending</span>
        </Link>
        <Link to="/movies" className="mr-4 mb-2 lg:mb-0 hover:opacity-75">
          <span>Movies</span>
        </Link>
        <Link to="/tvshows" className="mr-4 mb-2 lg:mb-0 hover:opacity-75">
          <span>TV Shows</span>
        </Link>
      </div>
      <form className="mr-5">
        <input
          type="text"
          class=" pl-2 block w-full lg:w-96 h-10 rounded-md border ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-gray-400 sm:text-sm sm:leading-6 bg-transparent text-white"
          placeholder="Search for your favorite movie or TV show"
        />
      </form>
    </nav>
  );
};

export default SearchBar;
