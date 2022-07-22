import React from "react";
import { Link } from "react-router-dom";
import style from "./MovieList.module.scss"

const MovieList = ({ query } ) => {

  return (
      <ul className={style.moviesList}>
        {query.map((movie) => (
              <li key={movie.id} className={style.movieItem}>
                <Link className={style.movieLink} to={`/movies/${movie.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.original_title}
                />
                <p className={style.movieTitle}>{movie.original_title}</p>
                </Link>
              </li>
        ))}
      </ul>
)
}

export default MovieList;
