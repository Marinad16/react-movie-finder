import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import MoviesApi from "../services/MoviesApi";
import {PulseLoader} from "react-spinners";
import "../index.scss";

import Pagination from "../components/Pagination/Pagination";
import MovieList from '../components/MovieList/MovieList';
import NotFound from "./NotFound";

const LastMoviesPage = () => {
    const [result, setResult] = useState( {results: [], total_results: 0});
    const [currentPage, setCurrentPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams();
    const [isMoviesLoading, setIsMoviesLoading] = useState(false)

    const handleParams = (curpage)=>{
        setCurrentPage(curpage)
        searchParams.set('page', curpage)
        setSearchParams(searchParams)
    }

    useEffect(() => {
        setIsMoviesLoading(true);
        MoviesApi.fetchLastMovies("now_playing", currentPage).then((data) => setResult(data));
        setIsMoviesLoading(false);
    }, [currentPage] );

    return (
        <div>
            <h1 className="title">Now playing</h1>
            {result.results === [] && (<NotFound />)}
            {isMoviesLoading
                ? <div className="loader-wrapper">
                    <PulseLoader color="#BA181B" size="30px" margin="5px"/>
            </div>
                : <MovieList query={result.results} />
            }
            {result.results.length !== 0 && (<Pagination totalPosts={result.total_results} postsPerPage={result.results.length} setCurrentPage={handleParams} searchParams={searchParams}/>)}
        </div>
    );
};

export default LastMoviesPage;