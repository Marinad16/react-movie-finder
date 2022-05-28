import { useState } from 'react';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (query) => {
    setQuery(query);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {query !== "" && (<MovieList query={query} />)}
    </div>
  );
};

export default MoviesPage;
