import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMovies from "./components/home/TopMovies";
import Banner from "./components/Banner/Banner";
import Card from "./components/Cards/Card";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/tvShows" element={<TopMovies />} />
          <Route path="/recommendations" element={<TopMovies />} />
          <Route path="/about" element={<TopMovies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
