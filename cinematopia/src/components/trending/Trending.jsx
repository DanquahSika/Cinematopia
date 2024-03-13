import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/movie-card/MovieCard";
import { FaArrowRight } from "react-icons/fa";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular`,
          {
            params: {
              api_key: "758ef82708fe77d393847f402f8756a0",
              page: page,
            },
          }
        );
        setMovies(response.data.results.slice(0, 6));
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrending();
  }, [page]);

  return (
    <section className="bg-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Trending Movies
        </h2>
        <div className="overflow-x-auto flex items-center mb-4">
          {movies.map((item) => (
            <MovieCard
              key={item.id}
              title={item.title}
              poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              release={item.release_date}
              rating={item.vote_average}
              className="mr-5"
            />
          ))}
        </div>
        <div className="text-center">
          {/* <a href="/trending"> */}
          {/* {" "} */}
          <button
            onClick={() => setPage(page + 1)}
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md transition duration-500 ease-in-out transform hover:scale-105 hover:bg-yellow-600 focus:outline-none"
          >
            View More <FaArrowRight className="ml-2" />
          </button>
          {/* </a> */}
        </div>
      </div>
    </section>
  );
};

export default Trending;
