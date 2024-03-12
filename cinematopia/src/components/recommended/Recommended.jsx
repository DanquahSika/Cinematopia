import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Recommended = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "1ecae5e0079043311ae8da7d96623e50",
              with_genres: "18",
              sort_by: "popularity.desc",
              vote_average: ">=7",
              page: 1,
              include_adult: false,
            },
          }
        );
        setRecommendedMovies(response.data.results.slice(0, 8));
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
      }
    };

    fetchRecommendedMovies();
  }, []);

  return (
    <section className="bg-gray-200 py-12 mt-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-black mb-8">
          Recommended Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recommendedMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-background rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">
                    {movie.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <FaStar className="text-EA8F11 mr-1" />
                    <p className="text-gray-700">{movie.vote_average}</p>
                  </div>
                  <p className="text-gray-600">{movie.overview}</p>
                </div>
                <button className="bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4 self-center">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
