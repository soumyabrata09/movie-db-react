import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { NavBar } from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

export const App = () => {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  )
};
