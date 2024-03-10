import React, { useState, useEffect } from "react";
import searchicon from "../../assets/img/search.svg";
import Pagination from "../../components/pagination/Pagination";
import MovieCard from "../../components/movie-card/MovieCard";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=758ef82708fe77d393847f402f8756a0&page=${page}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.results);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  useEffect(() => {
    fetchSearch();
  }, [page]);

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
      <div
        className="flex flex-wrap mx-auto items-center justify-center mt-2 pt-2"
        style={{ maxWidth: "1340px" }}
      >
        {content.map((item) => {
          const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
          return (
            <MovieCard
              key={item.id}
              title={item.title}
              poster={posterUrl}
              release={item.release_date}
              type={item.media_type}
              rating={item.vote_average}
            />
          );
        })}
        {page > 1 && <Pagination page={page} setPage={setPage} />}
      </div>
    </>
  );
};

export default SearchPage;
