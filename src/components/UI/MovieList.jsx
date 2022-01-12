import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieApi from "../../services/MoviesApi";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieApi.fetchTrendingMovies('day').then((data) => setMovies(data));
  }, []);

  useEffect(() => {
    MovieApi.fetchMovieWithQuery('cat').then((data) => setMovies(data))
  }, [])

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
