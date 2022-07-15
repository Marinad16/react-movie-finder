import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Slider} from "../components/Slider";
import MovieApi from "../services/MoviesApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const day = "day";

  useEffect(() => {
    MovieApi.fetchTrendingMovies(day).then((data) => setMovies(data));
  }, []);

  return (
    <div className="">
        <Slider/>
      <h1>Trending now</h1>
      <ul className="list movies-list">
        {movies.map((movie) => (
            <Link className="movie-link" to={`/movies/${movie.id}`}>
                <li key={movie.id} className="item movie-item">
                    <img
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt={movie.original_title}
                    />
                    <p className="movie-title">{movie.original_title}</p>
                </li>
            </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
