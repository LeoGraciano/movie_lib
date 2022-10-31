import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { getMovies } from "../utils/loadMovies";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const loadMovies = async () => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    const data = await getMovies(topRatedUrl);
    setTopMovies(data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando....</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
