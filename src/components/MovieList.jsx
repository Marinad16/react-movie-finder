import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesApi from '../services/MoviesApi';

const MovieList = ({ query } ) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesApi.fetchMovieWithQuery(query).then((data) => setMovies(data));
  }, [query]);
  
  return (
        <ul className="list movies-list">
        {movies.map((movie) => (
          <li key={movie.id} className="item movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
)
}

export default MovieList;
