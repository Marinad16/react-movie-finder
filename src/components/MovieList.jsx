import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ query } ) => {

  return (
      <ul className="list movies-list">
        {query.map((movie) => (
              <li key={movie.id} className="item movie-item">
                <Link className="movie-link" to={`/movies/${movie.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.original_title}
                />
                <p className="movie-title">{movie.original_title}</p>
                </Link>
              </li>
        ))}
      </ul>
)
}

export default MovieList;
