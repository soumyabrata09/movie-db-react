import { MovieCard } from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";

export const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
};
