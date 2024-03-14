import React, { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import Pagination from "../../components/pagination/Pagination";

const Movies = () => {
  const [film, setFilm] = useState([]);
  const [page, setPage] = useState(1);
  const fetchFilm = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=758ef82708fe77d393847f402f8756a0&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilm(data.results);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  useEffect(() => {
    fetchFilm();
  }, [page]);

  return (
    <div>
      <div
        className="flex flex-wrap mx-auto items-center justify-center mt-5"
        style={{ maxWidth: "1340px" }}
      >
        {film.map((item) => {
          const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
          return (
            <MovieCard
              key={item.id}
              title={item.original_title}
              poster={posterUrl}
              release={item.release_date}
              type={item.media_type}
              rating={item.vote_average}
              id={item.id}
            />
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Movies;
