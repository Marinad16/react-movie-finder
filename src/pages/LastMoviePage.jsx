import MovieList from '../components/MovieList/MovieList';
import React, {useEffect, useState} from "react";
import MoviesApi from "../services/MoviesApi";
import NotFound from "./NotFound";
import "../index.scss";
import Pagination from "../components/Pagination/Pagination";
import {useSearchParams} from "react-router-dom";

const LastMoviesPage = () => {
    const [result, setResult] = useState( {results: [], total_results: 0});
    const [currentPage, setCurrentPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams();

    const blabla = (curpage)=>{
        setCurrentPage(curpage)
        searchParams.set('page', curpage)
        setSearchParams(searchParams)
    }

    useEffect(() => {
        MoviesApi.fetchLastMovies("now_playing", currentPage).then((data) => setResult(data));
    }, [currentPage] );

    return (
        <div>
            <h1 className="title">Now playing</h1>
            {result.results === [] && (<NotFound />)}
            {result.results !== [] && (<MovieList query={result.results} />)}
            {result.results.length !== 0 && (<Pagination totalPosts={result.total_results} postsPerPage={result.results.length} setCurrentPage={blabla} searchParams={searchParams}/>)}
        </div>
    );
};

export default LastMoviesPage;