import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ripple from "../../assets/img/ripples.svg";

const SingleMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [videos, setVideos] = useState([]);
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=758ef82708fe77d393847f402f8756a0`
      );
      const data = await response.json();
      setMovieData(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=758ef82708fe77d393847f402f8756a0`
      );
      const data = await response.json();
      // Slice the first four reviews
      const limitedReviews = data.results.slice(0, 4);
      setReviews(limitedReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=758ef82708fe77d393847f402f8756a0`
      );
      const data = await response.json();
      setVideos(data.results);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchMovieDetails();
      await fetchReviews();
      await fetchVideos();
    })();
  }, [id]);

  if (!movieData) {
    return (
      <div>
        <img src={ripple} className="w-64 mx-auto" />
      </div>
    );
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;

  return (
    <>
      <div className="movie-videos">
        <div>
          {videos.length > 0 && ( // Check if there are any videos
            <div key={videos[0].id} className="pt-4 px-7">
              {" "}
              <iframe
                className="w-full"
                src={`https://www.youtube.com/embed/${videos[1].key}`}
                title={videos[0].name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{ height: "100dvh" }}
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <div className="movie-details px-7">
        <div
          className="poster-textitems-1 flex pt-3 gap-5 text-center"
          style={{ width: "700px" }}
        >
          <img
            src={imageUrl}
            alt={movieData.title}
            className="movie-poster rounded"
            style={{ width: "500px", height: "500px" }}
          />
          <div className="movie-info text-left">
            <h2 className="text-3xl font-bold pt-2">{movieData.title}</h2>
            <p className="pt-2">
              <b>Release Date:</b> {movieData.release_date}
            </p>
            <p className="pt-2">
              <b>Genres:</b>{" "}
              {movieData.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="pt-2">
              <b>Overview:</b> {movieData.overview}
            </p>
            <p className="pt-2">
              <b>Production Companies:</b>{" "}
              {movieData.production_companies
                .map((company) => company.name)
                .join(", ")}
            </p>
            <p className="pt-2">
              <b>Rating:</b> {movieData.vote_average}
            </p>
          </div>
        </div>
        <div className="movie-review">
          <h3 className="text-center text-3xl font-bold">Movie Reviews</h3>
          <div className="review-card flex gap-5">
            {reviews.map((review) => (
              <div key={review.id} className="w-full">
                <p className="text-center pt-2 px-2">
                  <b>Author:</b> {review.author}
                </p>
                <p className="text-center pt-2 px-2">
                  <b>Content:</b> {review.content.substring(0, 70)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
