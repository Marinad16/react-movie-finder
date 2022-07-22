import { useSearchParams } from "react-router-dom";
import MovieList from '../components/MovieList/MovieList';
import React, {useEffect, useState} from "react";
import MoviesApi from "../services/MoviesApi";
import NotFound from "./NotFound";
import "../index.scss"

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const movieQuery = searchParams.get('query') || "";

  useEffect(() => {
    MoviesApi.fetchMovieWithQuery(movieQuery).then((data) => setMovies(data));
  }, [movieQuery]);

  console.log(movieQuery)

  return (
    <section>
      <h1 className="title">You are searching: {movieQuery}</h1>
      {movies === [] && (<NotFound />)}
      {movies !== [] && (<MovieList query={movies} />)}
    </section>
  );
};

export default MoviesPage;
