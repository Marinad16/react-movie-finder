import {useState, useEffect} from 'react'
import MovieList from '../components/UI/MovieList';
import MovieApi from "../services/MoviesApi";

const MoviesPage = () => {
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default MoviesPage;
