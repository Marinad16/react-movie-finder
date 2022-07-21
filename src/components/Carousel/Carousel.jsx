import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import {Link} from "react-router-dom";
import MoviesApi from "../../services/MoviesApi";
import "./Carousel.scss"

const HomeCarousel = () => {
    const [movies, setMovies] = useState([]);
    const day = "day";

    useEffect(() => {
        MoviesApi.fetchTrendingMovies(day).then((data) => setMovies(data));
    }, []);

    const breakPoints = [
        { width:1, itemsToShow: 1},
        { width:550, itemsToShow: 2},
        { width:768, itemsToShow: 3},
        { width:1081, itemsToShow: 4},
    ]

    return (
        <section>
            <h1>Trending now</h1>
            <div className="style">
                <Carousel breakPoints={breakPoints} >
                    {movies.map((movie) => (
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
                </Carousel>
            </div>
        </section>
    );
};

export default HomeCarousel;