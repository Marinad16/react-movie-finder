const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "8a90429f33fa4409253b1c186b2a8429";

const fetchMovieDetails = movieId => {
  return fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`).then(res => res.json());
}

const fetchMovieWithQuery = (searchQuery, page) => {
  return fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${page}`)
    .then((res) => res.json());
}

const fetchTrendingMovies = (period) => {
  return fetch(`${baseUrl}/trending/movie/${period}?api_key=${apiKey}`)
    .then((res) => res.json())
    .then((result) => result.results);
}

const fetchLastMovies = async (latest, page= 1) => {
    return await fetch(`${baseUrl}/movie/${latest}?api_key=${apiKey}&page=${page}`)
        .then((res) => res.json());
}

export default { fetchMovieDetails, fetchMovieWithQuery, fetchTrendingMovies, fetchLastMovies };