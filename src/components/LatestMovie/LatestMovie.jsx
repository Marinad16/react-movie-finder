import style from "./LatestMovie.module.scss"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import MoviesApi from "../../services/MoviesApi";

const LatestMovie = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        MoviesApi.fetchLastMovies("now_playing").then((data) => setMovie(data.results[0]));
    }, []);

    return (
        <section className={style.posterWrapper}>
            {movie !== [] && (
                <>
                    <div className={style.infoWrapper}>
                        <h3>Most watching now!</h3>
                        <h1 className={style.title}>{movie.original_title}</h1>
                            <p className={style.vote}>
                                TMDB:
                                {movie.vote_average}
                            </p>
                        <p className={style.overview}>{movie.overview}</p>
                        <Link to={`/movies/${movie.id}`} className={style.button} >
                            <i className="bx bx-play" ></i>
                            Watch
                        </Link>
                    </div>
                    <img className={style.poster}
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt={movie.original_title}
                         width="300px" height="450px"
                    />
                </>
            )}
        </section>
    );
};

export default LatestMovie;