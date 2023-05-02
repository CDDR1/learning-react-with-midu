import React from "react";

const Movies = ({ movies }) => {
  return (
    <div>
      {movies && (
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-item">
              <h2 className="movie-title">{movie.title}</h2>
              <span className="movie-year">{movie.year}</span>
              <img src={movie.poster} alt={`Poster of ${movie.title}`} className="movie-poster" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
