import MovieList from '../components/MovieList/MovieList';
import React, {useEffect, useState} from "react";
import MoviesApi from "../services/MoviesApi";
import NotFound from "./NotFound";
import "../index.scss";
import Pagination from "../components/Pagination/Pagination";

const LastMoviesPage = () => {
    const [result, setResult] = useState( {results: [], total_results: 0});
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        MoviesApi.fetchLastMovies("now_playing", currentPage).then((data) => setResult(data));
    }, [currentPage] );

    console.log(result)

    const paginate = (currentPage) => setCurrentPage(currentPage)

    return (
        <div>
            <h1 className="title">Now playing</h1>
            {result.results === [] && (<NotFound />)}
            {result.results !== [] && (<MovieList query={result.results} />)}
            <Pagination totalPosts={result.total_results} postsPerPage={result.results.length} paginate={paginate} />
        </div>
    );
};

export default LastMoviesPage;