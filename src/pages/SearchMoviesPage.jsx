import React, {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import MoviesApi from "../services/MoviesApi";
import "../index.scss"
import Pagination from "../components/Pagination/Pagination";
import MovieList from '../components/MovieList/MovieList';
import NotFound from "./NotFound";

const SearchMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState({results: [], total_results: 0});
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || "")
  const [movieQuery] = useState(searchParams.get('query') || "");

  const handleParams = (curpage)=>{
    setCurrentPage(curpage)
    searchParams.set('query', movieQuery)
    searchParams.set('page', curpage)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    MoviesApi.fetchMovieWithQuery(movieQuery, currentPage).then((data) => setMovies(data));
  }, [movieQuery, currentPage]);

  return (
    <section>
      <h1 className="title">You are searching: {movieQuery}</h1>
      {movies.results === [] && (<NotFound />)}
      {movies.results !== [] && (<MovieList query={movies.results} />)}
      {movies.total_results !== 0 && (<Pagination totalPosts={movies.total_results} postsPerPage={movies.results.length} setCurrentPage={handleParams} searchParams={searchParams}/>)}
    </section>
  );
};

export default SearchMoviesPage;
