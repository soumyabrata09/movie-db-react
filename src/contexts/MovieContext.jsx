import { createContext, useContext, useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies, searchMovies } from "../services/api";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        } 
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };

    const loadPopularMovies = async () => {
        setLoading(true);
        try {
            const popuarMovies = await getPopularMovies();
            setMovies(popuarMovies);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to load popular movies...");
        } finally {
            setLoading(false);
        }
    }; 

    const loadTopMovies = async () => {
        setLoading(true);
        try {
            const topMovies = await getTopRatedMovies();
            setMovies(topMovies);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to load top rated movies...");
        } finally {
            setLoading(false);
        }
    };

    const searchMovieList = async (query) => {
        setLoading(true);
        try {
            const searchResults = await searchMovies(query);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to load search results");
        } finally {
            setLoading(false);
        }
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        loadPopularMovies,
        loadTopMovies,
        searchMovieList,
        movies,
        loading,
        error
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
