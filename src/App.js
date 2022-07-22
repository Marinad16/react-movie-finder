import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MoviesDetailsPage";
import LastMoviePage from "./pages/LastMoviePage";
import SearchMoviesPage from "./pages/SearchMoviesPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import './index.scss'
import './normalize.css'

const App = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<LastMoviePage />} />
            <Route path="movies/search" element={<SearchMoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    );
}

export default App;

