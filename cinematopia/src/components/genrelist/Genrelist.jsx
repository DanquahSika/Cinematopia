import React, { useState, useEffect } from "react";
import play from "../../assets/img/playfilled.svg";
import { Link } from "react-router-dom";

const MoviesByGenrePage = ({ genreId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=758ef82708fe77d393847f402f8756a0&with_genres=${genreId}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies by genre:", error);
      }
    };

    fetchMoviesByGenre();
  }, [genreId]);

  return (
    <div className="movies-by-genre-page">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-4 mx-auto items-center justify-center mt-5 px-7 bg-teal-950 bg-opacity-25">
        {movies.map((movie) => (
          <div
            key={movie.id}
            id={movie.id}
            className="flex flex-col items-center rounded-md shadow-md bg-teal-950 bg-opacity-25 relative" // Add `relative` for absolute positioning
            style={{ minHeight: "300px" }}
          >
            <Link to={`/movies/${movie.id}`}>
              <img
                src={play}
                className="absolute inset-0 w-1/2 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition duration-300 hover:scale-125"
                style={{ width: "50px" }}
              />
            </Link>

            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto object-cover rounded-t"
              style={{ maxWidth: "250px", maxHeight: "375px" }}
            />
            <h3 className="font-bold pt-1 text-center">{movie.title}</h3>
            <p className="text-center px-4">
              {movie.overview.substring(0, 70)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesByGenrePage;
