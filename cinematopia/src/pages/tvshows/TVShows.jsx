import React, { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import ripples from "../../assets/img/ripples.svg";

const TVShows = () => {
  const [tvshows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Added state for loading

  const fetchTvShows = async () => {
    setIsLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=758ef82708fe77d393847f402f8756a0&page=${page}`
      );
      const data = await response.json();
      setTvShows(data.results);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchTvShows();
  }, [page]);

  return (
    <div>
      {isLoading ? ( // Conditionally render preloader
        <div className="flex justify-center items-center mt-5">
          <img src={ripples} className="w-64 mx-auto" alt="Loading..." />
        </div>
      ) : (
        <div
          className="grid lg:grid-cols-5 md:grid-cols-2 mx-auto items-center justify-center"
          style={{ marginTop: "12rem" }}
        >
          {tvshows.map((item) => {
            const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
            return (
              <MovieCard
                key={item.id}
                title={item.original_name}
                poster={posterUrl}
                release={item.first_air_date}
                type={item.media_type}
                rating={item.vote_average}
              />
            );
          })}
          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default TVShows;
