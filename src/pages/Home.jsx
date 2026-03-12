import { MovieCard } from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { ScrollToTop } from "../components/ScrollToTop";
import { useMovieContext } from "../contexts/MovieContext";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {movies, loading, error, searchMovieList, loadPopularMovies} = useMovieContext();

  useEffect(() => { loadPopularMovies() }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    searchMovieList(searchQuery);

    // setLoading(true);
    // try {
    //     const searchResults = await searchMovies(searchQuery);
    //     setMovies(searchResults);
    //     setError(null);
    // } catch (err) {
    //     console.log(err);
    //     setError("Failed search movies...");
    // } finally {
    //     setLoading(false);
    // }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {Array.isArray(movies) && movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}

      <ScrollToTop />
    </div>
  );
};
