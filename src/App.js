import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MoviesDetailsPage";
import LastMoviesPage from "./pages/LastMoviePage";
import MoviesPage from "./pages/MoviesPage";
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
            <Route path="movies" element={<LastMoviesPage />} />
            <Route path="movies/search" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    );
}

export default App;

