import React from "react";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/footer";
import Recommended from "../../components/recommended/Recommended";
import Featured from "../../components/featured/Featured";
import TopRated from "../../components/toprated/Toprated";
import ClassicMoviesAndTrivia from "../../components/classic-and-trivia/ClassicMoviesAndTrivia";
import TrendingMovies from "../../components/trending-movies/TrendingMovies";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Recommended />
      <Featured />
      <TopRated />
      <TrendingMovies />
      <ClassicMoviesAndTrivia />
      <Footer />
    </div>
  );
};

export default Homepage;
