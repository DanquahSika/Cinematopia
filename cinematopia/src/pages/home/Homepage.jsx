import React from "react";
import Hero from "../../components/hero/Hero";
import Recommended from "../../components/recommended/Recommended";
import Featured from "../../components/featured/Featured";
import Toprated from "../../components/toprated/Toprated";
import TrendingMovies from "../../components/trending-movies/TrendingMovies";
import ClassicMoviesAndTrivia from "../../components/classic-and-trivia/ClassicMoviesAndTrivia";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Recommended />
      <Featured />
      <Toprated />
      <TrendingMovies />
      <ClassicMoviesAndTrivia />
    </div>
  );
};

export default Homepage;
