import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

import { getMovies } from "../utils/loadMovies";

const searchUrl = import.meta.env.VITE_SEARCH_URL;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

export const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const loadMovies = async (url) => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
    const data = await getMovies(searchWithQueryUrl);
    setMovies(data);
  };

  useEffect(() => {
    loadMovies();
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando....</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
