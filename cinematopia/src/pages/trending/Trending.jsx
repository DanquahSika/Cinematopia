import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import ripples from "../../assets/img/ripples.svg";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrending = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=758ef82708fe77d393847f402f8756a0&page=${page}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center mt-5">
          <img src={ripples} className="w-64 mx-auto" alt="Loading..." />
        </div>
      ) : (
        <>
          <div className="grid lg:grid-cols-5 mx-auto mt-5 md:grid-cols-2 px-7 gap-2">
            {movies.map((item) => {
              const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
              return (
                <MovieCard
                  id={item.id}
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
        </>
      )}
    </div>
  );
};

export default Trending;
