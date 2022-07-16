import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Slider} from "../components/Slider";
import MovieApi from "../services/MoviesApi";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const day = "day";

  useEffect(() => {
    MovieApi.fetchTrendingMovies(day).then((data) => setMovies(data));
  }, []);


  return (
    <section className="">
        <Slider/>
      <h1>Trending now</h1>
        {movies !== [] && (<MovieList query={movies} />)}
    </section>
  );
};

export default HomePage;
