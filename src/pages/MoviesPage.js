import { useSearchParams } from "react-router-dom";
import MovieList from '../components/MovieList';
import React, {useEffect, useState} from "react";
import MoviesApi from "../services/MoviesApi";
import NotFound from "./NotFound";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const movieQuery = searchParams.get('query') || "";

  useEffect(() => {
    MoviesApi.fetchMovieWithQuery(movieQuery).then((data) => setMovies(data));
  }, [movieQuery]);

  console.log(movieQuery)

  return (
    <div>
      {movies === [] && (<NotFound />)}
      {movies !== [] && (<MovieList query={movies} />)}
    </div>
  );
};

export default MoviesPage;
