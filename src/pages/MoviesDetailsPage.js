import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviesApi from "../services/MoviesApi";

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    MoviesApi.fetchMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <h1>{movie.original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
          />
            <div>
              <p>genres: {movie.genres.map((genre) => (
                  <p>{genre.name}</p>
                  )
              )}</p>
              <p>budget: {movie.budget}</p>

            </div>
          <p>{movie.overview}</p>

        </>
      )}
    </div>
  );
};

export default MoviesDetailsPage;
