import React, { useState, useEffect } from "react";
import searchicon from "../../assets/img/search.svg";
import Pagination from "../../components/pagination/Pagination";
import MovieCard from "../../components/movie-card/MovieCard";
import ripples from "../../assets/img/ripples.svg";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Added state for loading

  const fetchSearch = async () => {
    setIsLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=758ef82708fe77d393847f402f8756a0&page=${page}&language=en-US&query=${searchText}&include_adult=false`
      );
      const data = await response.json();
      setContent(data.results);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    if (searchText) {
      fetchSearch();
    }
  }, [searchText, page]); // Update on searchText and page changes

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchSearch();
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="flex place-items-center h-full w-12 text-gray-300">
            <img
              src={searchicon}
              alt="search-icon"
              className="h-8 cursor-pointer pl-2"
              onClick={fetchSearch}
            />
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search your favorite movie, TV shows here..."
            value={searchText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
      {isLoading ? ( // Conditionally render preloader
        <div className="flex justify-center items-center mt-2 pt-2">
          <img src={ripples} className="w-64 mx-auto" alt="Loading..." />
        </div>
      ) : content.length > 0 ? ( // Check if there are results
        <div className="grid lg:grid-cols-5  md:grid-cols-2 mx-auto items-center justify-center mt-5 px-5">
          {content.map((item) => (
            <MovieCard
              id={item.id}
              key={item.id}
              title={item.title}
              poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              release={item.release_date}
              type={item.media_type}
              rating={item.vote_average}
            />
          ))}
          {page > 1 && <Pagination page={page} setPage={setPage} />}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-5">No results found.</p>
      )}
    </>
  );
};

export default SearchPage;
