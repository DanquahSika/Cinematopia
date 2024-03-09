import SearchBar from "./components/search/SearchBar";
import Trending from "./pages/trending/Trending";
import Homepage from "./pages/home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import TVShows from "./pages/tvshows/TVShows";
import SearchPage from "./pages/search-page/SearchPage";
// import SingleMovie from "./pages/singlemovie/SingleMovie";

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
