// import React, { useEffect, useState } from "react";
// import MovieCard from "../../components/movie-card/MovieCard";
// import Pagination from "../../components/pagination/Pagination";
// import ripples from "../../assets/img/ripples.svg";

// const Movies = () => {
//   const [film, setFilm] = useState([]);
//   const [page, setPage] = useState(1);
//   const fetchFilm = () => {
//     fetch(
//       `https://api.themoviedb.org/3/trending/movie/week?api_key=758ef82708fe77d393847f402f8756a0&page=${page}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setFilm(data.results);
//       })
//       .catch((error) => {
//         console.log("Error fetching data", error);
//       });
//   };

//   useEffect(() => {
//     fetchFilm();
//   }, [page]);

//   return (
//     <div>
//       <div
//         className="grid lg:grid-cols-5  md:grid-cols-2 mx-auto items-center justify-center mt-5"
//         // style={{ maxWidth: "1340px" }}
//       >
//         {film.map((item) => {
//           const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
//           return (
//             <MovieCard
//               key={item.id}
//               title={item.original_title}
//               poster={posterUrl}
//               release={item.release_date}
//               type={item.media_type}
//               rating={item.vote_average}
//               id={item.id}
//             />
//           );
//         })}
//       </div>
//       <Pagination page={page} setPage={setPage} />
//     </div>
//   );
// };

// export default Movies;

import React, { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import ripples from "../../assets/img/ripples.svg";
import GenreButton from "../../components/genrebtn/Genrebtn";
import MoviesByGenrePage from "../../components/genremovies/GenreMovies";

const Movies = () => {
  const [film, setFilm] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Added state for loading
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSelectGenre = (genreId) => {
    setSelectedGenre(genreId);
  };

  const fetchFilm = async () => {
    setIsLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=758ef82708fe77d393847f402f8756a0&page=${page}`
      );
      const data = await response.json();
      setFilm(data.results);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchFilm();
  }, [page]);

  return (
    <div>
      {isLoading ? ( // Conditionally render preloader
        <div className="flex justify-center items-center mt-5">
          <img src={ripples} className="w-64 mx-auto" alt="Loading..." />
        </div>
      ) : (
        <div
          className="grid lg:grid-cols-5 md:grid-cols-2 mx-auto items-center justify-center mt-5 px-7"
          // style={{ maxWidth: "1340px" }}
        >
          <GenreButton onSelectGenre={handleSelectGenre} />
          {selectedGenre && <MoviesByGenrePage genreId={selectedGenre} />}
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
          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default Movies;
