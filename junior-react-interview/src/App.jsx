import "./App.css";
import { useState } from "react";
import Movies from "./components/movies";
import { useMovies } from "./hooks/useMovies";

// const API_URL = `https://www.omdbapi.com/?apikey=35d81d2f&type=movie&s=`;

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { movies, fetchMovies } = useMovies({ searchValue });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
    setSearchValue("");
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="page-title">Movies</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <div>
            <label htmlFor="search-movie">Search movie title</label>
            <input type="text" id="search-movie" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Star Wars, Harry Potter, Batman..." />
          </div>
          <button type="submit" className="submit-btn">
            Search
          </button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
