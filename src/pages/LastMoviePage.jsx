
import MovieList from '../components/MovieList';
import React, {useEffect, useState} from "react";
import MoviesApi from "../services/MoviesApi";
import NotFound from "./NotFound";

const LastMoviesPage = () => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        MoviesApi.fetchLastMovies("now_playing").then((data) => setMovies(data));
    }, []);

console.log(movies)

    return (
        <div>
            <h1>Now playing</h1>
            {movies === [] && (<NotFound />)}
            {movies !== [] && (<MovieList query={movies} />)}
        </div>
    );
};

export default LastMoviesPage;