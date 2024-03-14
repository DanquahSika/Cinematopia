import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const Featured = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "1ecae5e0079043311ae8da7d96623e50",
              with_genres: "10749,14",
              sort_by: "popularity.desc",
              vote_average: ">=7",
              page: 1,
              include_adult: false,
            },
          }
        );
        setFeaturedMovies(response.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching featured movies:", error);
      }
    };

    fetchFeaturedMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <section className="bg-gray-900 py-4 mt-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">
          Featured Movies Of The Week
        </h2>
        <Slider {...settings} className="overflow-hidden">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="px-2">
              <div className="w-full bg-background rounded-lg shadow-md h-48">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover object-center rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-white truncate">
                    {movie.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <FaStar className="text-yellow-600 mr-1" />
                    <p className="text-gray-300">{movie.vote_average}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Featured;
