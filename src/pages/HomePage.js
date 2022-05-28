import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieApi from "../services/MoviesApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const day = "day";

  useEffect(() => {
    MovieApi.fetchTrendingMovies(day).then((data) => setMovies(data));
  }, []);

  return (
    <div className="">
      <h1>Trending now</h1>
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
    </div>
  );
};

export default HomePage;
