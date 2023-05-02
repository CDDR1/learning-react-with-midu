import { useState, useRef } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=35d81d2f&type=movie&s=`;

export const useMovies = ({ searchValue }) => {
  const [movies, setMovies] = useState([]);
  const previousSearchValue = useRef(null);

  const fetchMovies = () => {
    if (previousSearchValue.current === searchValue) return;
    previousSearchValue.current = searchValue;
    fetch(API_URL + searchValue)
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies.Search);
      });
  };

  const mappedMovies = movies?.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
  });

  return { movies: mappedMovies, fetchMovies };
};
