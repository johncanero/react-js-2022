import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

// API KEY: 6c4bfdec

// API KEY: OMDb API (The Open Movie Database)
const API_URL = "http://www.omdbapi.com?apikey=6c4bfdec";

// STATIC DATA
const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};


// Function
const App = () => {
  const [movies, setMovies] = useState([]);

  // SEARCH
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  // Content 
  return (
    <div className="app">
      <h1>MovieLand</h1>

      {/* search */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img 
            src={SearchIcon} 
            alt="search" 
            onClick={() => searchMovies(searchTerm)}
         />
      </div>
      
      {/* movies (MovieCard) */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
