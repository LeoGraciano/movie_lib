import { useState, useEffect } from "react";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { useParams } from "react-router-dom";

import { getMovie } from "../utils/loadMovies";
import { currency } from "../utils/format";
import { MovieCard } from "../components/MovieCard";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const loadMovies = async () => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    console.log(movieUrl);
    const data = await getMovie(movieUrl);
    setMovie(data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="movie-page">
      {movie && <MovieCard movie={movie} showLink={false} />}
      <p className="tagline">{movie.tagline}</p>
      <div className="info">
        <h3>
          <BsWallet2 /> Orçamento
        </h3>
        <p>{currency(movie.budget)}</p>
      </div>
      <div className="info">
        <h3>
          <BsGraphUp /> Faturamento:
        </h3>
        <p>{currency(movie.revenue)}</p>
      </div>
      <div className="info">
        <h3>
          <BsHourglassSplit /> Duração:
        </h3>
        <p>{movie.runtime} minutos</p>
      </div>
      <div className="info description">
        <h3>
          <BsFillFileEarmarkTextFill /> Descrição:
        </h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
