import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              api_key: "1ecae5e0079043311ae8da7d96623e50",
              language: "en-US",
              page: 1,
            },
          }
        );
        setTopRatedMovies(response.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <section className="py-8 mt-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10 mt-8 flex items-center">
          Top Rated Movies
          <FaStar className="text-yellow-600 ml-2" />
        </h2>
        <div className="flex flex-wrap justify-center">
          {topRatedMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 mb-4"
            >
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt={movie.title}
                  className="w-full h-64 object-cover object-center rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-white truncate">
                    {movie.title}
                  </h3>
                  <p className="text-gray-300">Rating: {movie.vote_average}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Link to="/movies">
            <button className="text-lg py-2 px-6 bg-yellow-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 flex items-center">
              View More <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
