import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
export const MovieCard = ({ movie, showLink = true }) => {
  const imageUrl = import.meta.env.VITE_IMG_URL;
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2 className="title">{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};
