import React, { useState, useEffect } from "react";
import MovieCard from "../movie-card/MovieCard";
import { FaArrowRight, FaFire } from "react-icons/fa";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=758ef82708fe77d393847f402f8756a0&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-left text-4xl font-bold mb-6 text-white flex items-center">
        <span className="mr-2"></span>
        Trending Movies <FaFire className="text-yellow-600" />
      </h2>
      <div className="flex overflow-x-auto">
        {movies.slice(0, 6).map((item) => {
          const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
          return (
            <div key={item.id} className="flex-none w-1/6">
              <MovieCard
                title={item.title}
                poster={posterUrl}
                release={item.release_date}
                type={item.media_type}
                rating={item.vote_average}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setPage(page + 1)}
          className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-md shadow-md transition duration-500 ease-in-out transform hover:scale-105 hover:bg-yellow-700 focus:outline-none flex items-center mb-3"
        >
          View More <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TrendingMovies;
