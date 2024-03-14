import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
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

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=758ef82708fe77d393847f402f8756a0`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [id]);

  useEffect(() => {
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

    fetchVideos();
  }, [id]);

  if (!movieData) {
    return <div>Loading movie details...</div>;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;

  return (
    <div className="movie-details">
      <img src={imageUrl} alt={movieData.title} className="movie-poster" />
      <div className="movie-info">
        <h2>{movieData.title}</h2>
        <p>
          <b>Release Date:</b> {movieData.release_date}
        </p>
        <p>
          <b>Genres:</b>{" "}
          {movieData.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <b>Overview:</b> {movieData.overview}
        </p>
        <p>
          <b>Production Companies:</b>{" "}
          {movieData.production_companies
            .map((company) => company.name)
            .join(", ")}
        </p>
        <p>
          <b>Vote Average:</b> {movieData.vote_average}
        </p>
      </div>

      <div className="movie-reviews">
        <h3>Movie Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id}>
            <p>
              <b>Author:</b> {review.author}
            </p>
            <p>
              <b>Content:</b> {review.content}
            </p>
          </div>
        ))}
      </div>

      <div className="movie-videos">
        <h3>Movie Videos</h3>
        <div className="flex w-1200 flex-wrap">
          {videos.map((video) => (
            <div key={video.id}>
              <p>
                <b>Name:</b> {video.name}
              </p>
              <p>
                <b>Site:</b> {video.site}
              </p>
              <p>
                <b>Type:</b> {video.type}
              </p>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
