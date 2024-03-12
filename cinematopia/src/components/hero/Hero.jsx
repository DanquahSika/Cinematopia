import React, { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming",
          {
            params: {
              api_key: "1ecae5e0079043311ae8da7d96623e50",
            },
          }
        );
        setMovies(response.data.results.slice(0, 3));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === movies.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? movies.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === movies.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleSetReminder = (movieId) => {
    // Add logic to set reminder

    console.log(`Reminder set for movie ${movieId}`);
  };

  return (
    <div className="relative h-screen">
      <div className="relative h-full overflow-hidden">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-80 p-8 text-center text-white flex flex-col justify-center">
              <p className="text-sm mb-4">{movie.release_date}</p>
              <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">Overview</h3>
                <p className="text-lg">{movie.overview}</p>
              </div>
              <div>
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-6"
                  onClick={() => handleSetReminder(movie.id)}
                >
                  Set Reminder
                </button>
                <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded">
                  Play Trailer
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 px-2 py-1 bg-gray-800 rounded-bl-lg text-white text-2xl font-bold">
              Coming Soon
            </div>
          </div>
        ))}
      </div>
      {/* Slider arrows */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center mb-4">
        <button
          className="bg-yellow-600 text-white w-10 h-10 rounded-full focus:outline-none mr-4"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>
        <button
          className="bg-yellow-600 text-white w-10 h-10 rounded-full focus:outline-none ml-4"
          onClick={handleNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
