import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/cinelogo.png";
import searchicon from "../../assets/img/search.svg";
const SearchBar = () => {
  return (
    <nav className="flex items-center justify-normal mb-4">
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="pl-3"
            style={{ width: "12.5rem" }}
          />
        </Link>
      </div>
      <div className="nav-links flex flex-wrap justify-center grow">
        <Link to="/" className="mr-5 hover:opacity-75">
          <span>Home</span>
        </Link>
        <Link to="/trending" className="mr-5 hover:opacity-75">
          <span>Popular</span>
        </Link>
        <Link to="/movies" className="mr-5 hover:opacity-75">
          <span>Movies</span>
        </Link>
        <Link to="/tvshows" className="mr-5 hover:opacity-75">
          <span>TV Shows</span>
        </Link>
      </div>
      <div className="search-login flex items-center">
        <Link to="/search">
          {" "}
          <img
            src={searchicon}
            alt="search-icon"
            style={{ width: "2rem" }}
            className="mr-2"
          />
        </Link>
        <button
          className="bg-transparent rounded p-1 mr-5 border"
          style={{ width: "5rem" }}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default SearchBar;
