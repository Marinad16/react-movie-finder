
import MovieList from '../components/MovieList';
import React, {useEffect, useState} from "react";
import MoviesApi from "../services/MoviesApi";
import NotFound from "./NotFound";

const LastMoviesPage = () => {
    const [movies, setMovies] = useState([]);


    // useEffect(() => {
    //     MoviesApi.fetchMovieWithQuery(movieQuery).then((data) => setMovies(data));
    // }, [movieQuery]);


    return (
        <div>
            {movies === [] && (<NotFound />)}
            {/*{movies !== [] && (<MovieList query={movies} />)}*/}
        </div>
    );
};

export default LastMoviesPage;