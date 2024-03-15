// GenreButton.js
import React, { useState, useEffect } from "react";

const GenreButton = ({ onSelectGenre }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=758ef82708fe77d393847f402f8756a0"
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="genre-button">
      <button>Genre</button>
      <ul>
        {genres.map((genre) => (
          <li
            key={genre.id}
            onClick={() => onSelectGenre(genre.id)}
            className="cursor-pointer"
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreButton;
