import React, { Suspense, useEffect, useRef, useState } from 'react';
import {NavLink, Outlet, useLocation, useNavigate, useParams} from 'react-router-dom';
import { fetchMoviesById } from 'API/MovieApi';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const goBackRef = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState([null]);

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMovie(res));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(goBackRef.current);
  };

   
  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <div>
        <div>
          <h1>{movie.title}</h1>
          <span>{movie.tagline}</span>
          <p>{movie.overview}</p>
          <div>
            <span >
              <strong >Genres:</strong>
                {movie.genres?.map(item => (
                <span  key={item.id}>
                  {item.name}.
                </span>
              ))}
            </span>
            <span>
              <strong>Duration:</strong>
              <span>{movie.runtime} min</span>
            </span>
          </div>
          <div>
            <div >
              {movie.vote_average?.toFixed(1) * 10}%
            </div>
            <div>
              <h3>Viewer rating</h3>
              <span>
                Number of views:
                <strong>{movie.popularity}</strong>
              </span>
              <span >
                Total votes:
                <strong>{movie.vote_count}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
