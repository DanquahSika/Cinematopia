import React, { useState, useEffect } from "react";
import axios from "axios";

const ClassicMoviesAndTrivia = () => {
  const [classicMovies, setClassicMovies] = useState([]);
  const [triviaItems, setTriviaItems] = useState([]);

  useEffect(() => {
    const fetchClassicMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "1ecae5e0079043311ae8da7d96623e50",
              with_genres: "18",
              sort_by: "popularity.desc",
              page: 1,
            },
          }
        );
        setClassicMovies(response.data.results.slice(0, 4));
      } catch (error) {
        console.error("Error fetching classic movies:", error);
      }
    };

    const triviaItems = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        description:
          "Did you know? 'The Shawshank Redemption' was adapted from a novella by Stephen King.",
      },
      {
        id: 2,
        title: "Forrest Gump",
        description:
          "Did you know? Tom Hanks' character, Forrest Gump, was named after a real person called Forrest Gump.",
      },
      {
        id: 3,
        title: "The Godfather",
        description:
          "Did you know? Marlon Brando, who played Don Vito Corleone, actually had his jaw wired shut to achieve the distinctive voice for the character.",
      },
      {
        id: 4,
        title: "Schindler's List",
        description:
          "Did you know? The little girl in the red coat scene was one of the few instances of color used in the film, to emphasize the horror of the Holocaust.",
      },
      {
        id: 5,
        title: "Pulp Fiction",
        description:
          "Did you know? Quentin Tarantino wrote the role of Jules specifically for Samuel L. Jackson.",
      },
      {
        id: 6,
        title: "The Dark Knight",
        description:
          "Did you know? Heath Ledger kept a Joker diary during filming, in which he wrote down thoughts and ideas about the character.",
      },
      {
        id: 7,
        title: "The Lord of the Rings: The Return of the King",
        description:
          "Did you know? The film won all 11 Academy Awards for which it was nominated, tying it with 'Ben-Hur' and 'Titanic' for the most Oscars ever won by a single film.",
      },
      {
        id: 8,
        title: "Fight Club",
        description:
          "Did you know? Brad Pitt and Edward Norton took soap-making classes to prepare for their roles as Tyler Durden and the Narrator, respectively.",
      },
    ];

    setTriviaItems(triviaItems);
    fetchClassicMovies();
  }, []);

  return (
    <section className="classic-movies-and-trivia-section bg-gray-100 py-8 mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="classic-movies-column bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-4 text-center">
              Classic Movies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {classicMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="classic-movie-item bg-yellow-700 rounded-lg overflow-hidden flex flex-col justify-end"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "300px",
                    //   I will Adjust the height later
                  }}
                >
                  <div className="bg-black bg-opacity-75 p-2">
                    <h4 className="text-md font-bold text-white mb-1">
                      {movie.title}
                    </h4>
                    <p className="text-white text-xs">
                      Release Date: {movie.release_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="movie-trivia-column bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-4 text-center">
              Movie Trivia - Drama
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {triviaItems.map((item) => (
                <div
                  key={item.id}
                  className="trivia-item p-2 bg-gray-200 rounded-lg"
                >
                  <p className="text-md font-bold">{item.title}</p>
                  <p className="text-white-100 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassicMoviesAndTrivia;
