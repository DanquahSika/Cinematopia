// GenreButton.jsx
import React from "react";

const GenreButton = ({ genres, onSelectGenre }) => {
  return (
    <div className="genre-button">
      <button>Genre</button>
      <ul className="grid grid-cols-6 gap-1 p-0">
        {genres.map((genre) => (
          <li key={genre.id} onClick={() => onSelectGenre(genre.id)}>
            <button className="px-2 py-1 hover:bg-gray-100 cursor-pointer first:rounded-t-lg last:rounded-b-lg hover:text-blue-500">
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreButton;
