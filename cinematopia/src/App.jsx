import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Navbar";
import Homepage from "./pages/home/Homepage";
import Trending from "./pages/trending/Trending";
import Movies from "./pages/movies/Movies";
import SearchPage from "./pages/search-page/SearchPage";
import TVShows from "./pages/tvshows/TVShows";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
