import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import Pagination from "../../components/pagination/Pagination";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = () => {
    fetch(
      // "https://api.themoviedb.org/3/trending/all/day?api_key=758ef82708fe77d393847f402f8756a0"
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
    <div>
      {/* <h4 className="text-center pb-2">Browse our Popular movies/ tv shows</h4> */}
      <div
        className="flex flex-wrap mx-auto items-center justify-center mt-5"
        style={{ maxWidth: "1340px" }}
      >
        {movies.map((item) => {
          const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
          return (
            <MovieCard
              key={item.id}
              title={item.title}
              poster={posterUrl}
              release={item.release_date}
              type={item.media_type}
              rating={item.vote_average}
            />
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Trending;
