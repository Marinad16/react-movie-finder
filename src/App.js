import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MoviesDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import './index.css'
import './normalize.css'

const App = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* <Route path="/movies/:movieId" component={HomePage} />
          <Route path="/movies/:movieId/cast" component={HomePage} />
          <Route path="/movies/:movieId/reviews" component={HomePage} /> */}
        </Routes>
      </>
    );
}

export default App;

