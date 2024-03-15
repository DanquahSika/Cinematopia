// GenrePage.jsx
import React, { useState, useEffect } from "react";
import GenreButton from "../../components/genrebtn/Genrebtn";
import MoviesByGenrePage from "../genrelist/Genrelist";

const GenrePage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
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

  const handleSelectGenre = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <div className="genre-page">
      <h1 className="text-center">Filter for your favourite genre</h1>
      <div>
        <GenreButton genres={genres} onSelectGenre={handleSelectGenre} />
        {selectedGenre && <MoviesByGenrePage genreId={selectedGenre} />}
      </div>
    </div>
  );
};

export default GenrePage;
