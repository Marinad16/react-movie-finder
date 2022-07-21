import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviesApi from "../../services/MoviesApi";
import style from "./MovieDetails.module.scss"

const MoviesDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MoviesApi.fetchMovieDetails(movieId).then((data) => setMovie(data));
    }, [movieId]);

    return (
        <section>
            {movie && (
                <>
                    <h1 className={style.title}>{movie.original_title}</h1>
                    <div className={style.contentWrapper}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt={movie.original_title}
                        />
                        <div className={style.infoWrapper} >
                            <table>
                                <tbody>
                                <tr>
                                    <td>TMDB:</td>
                                    <td>{movie.vote_average}</td>
                                </tr>
                                <tr>
                                    <td>Release date:</td>
                                    <td>{movie.release_date}</td>
                                </tr>
                                <tr>
                                    <td>Runtime:</td>
                                    <td>{movie.runtime} m.</td>
                                </tr>
                                <tr>
                                    <td>Genres:</td>
                                    <td>{movie.genres.map((genre) => (
                                            <p key={genre.id}>{genre.name}</p>
                                        )
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>Country:</td>
                                    <td>{movie.production_countries.map((country) => (
                                        <p key={country.name}>{country.name}</p>
                                    ))}</td>
                                </tr>
                                <tr>
                                    <td>Budget:</td>
                                    <td>{movie.budget}</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <h3 className={style.overviewTitle}>Overview</h3>
                    <p className={style.overview}>{movie.overview}</p>
                </>
            )}
        </section>
    );
};

export default MoviesDetails;