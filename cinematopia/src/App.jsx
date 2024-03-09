import SearchBar from "./components/search/SearchBar";
import Genre from "./pages/trending/Trending";
import Homepage from "./pages/home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/trending" element={<Genre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
