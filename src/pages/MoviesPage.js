
import { useSearchParams } from "react-router-dom";
import MovieList from '../components/MovieList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const movieQuery = searchParams.get('query') || "";

  return (
    <div>
      {movieQuery !== "" && (<MovieList query={movieQuery} />)}
    </div>
  );
};

export default MoviesPage;
