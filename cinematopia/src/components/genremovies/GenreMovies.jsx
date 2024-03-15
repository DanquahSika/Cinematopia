// MoviesByGenrePage.js
import React, { useState, useEffect } from "react";
// import play from "../../assets/img/playfilled.svg";
// import { Link } from "react-router-dom";

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
      <h2>Movies by Genre</h2>
      <div className="movie-list grid lg:grid-cols-5 mx-auto mt-5 md:grid-cols-2 px-7 gap-2">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            {/* <Link to={`/movies/${id}`}>
              <img
                src={play}
                alt="play-icon"
                className="h-auto absolute top-36 cursor-pointer transform 
        transition duration-3000 
        hover:scale-125"
                style={{ width: "50px" }}
              />
            </Link> */}
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesByGenrePage;
