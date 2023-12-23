import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import {Layout} from './Layout/Layout.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Movie = lazy(() => import('../pages/Movie/Movie.jsx'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));
const Cast = lazy(() => import('../components/Cast/Cast.jsx'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};