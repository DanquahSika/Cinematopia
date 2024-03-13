import React from "react";
import Hero from "../../components/hero/Hero";
import Recommended from "../../components/recommended/Recommended";
import Featured from "../../components/featured/Featured";
import Toprated from "../../components/toprated/Toprated";
import Trending from "../../components/trending/Trending";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Recommended />
      <Featured />
      <Toprated />
      <Trending />
    </div>
  );
};

export default Homepage;
