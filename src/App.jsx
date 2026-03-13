import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { NavBar } from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import { SwaggerDocs } from './pages/SwaggerDocs';
import { AppRoutes } from './configs/appRoutes';

export const App = () => {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path={AppRoutes.ROOT} element={<Home />}></Route>
          <Route path={AppRoutes.HOMEPAGE} element={<Home />}></Route>
          <Route path={AppRoutes.FAVS} element={<Favorites />}></Route>
          <Route path={AppRoutes.DOCS} element={<SwaggerDocs />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  )
};
