import React, { Suspense, useEffect, useRef, useState } from 'react';
import {NavLink, Outlet, useLocation, useNavigate, useParams} from 'react-router-dom';
import { fetchMoviesById } from 'API/MovieApi';

const imgLink = 'https://image.tmdb.org/t/p/w500';


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
        {movie.poster_path === null ? (
            <img
              src={`https://images.app.goo.gl/7y7N8uyfeB8GR5PYA`}
              alt={movie.title} />
          ) : (
            <img
              src={`${imgLink + movie.poster_path}`}
              alt={movie.title}
             
            />
          )}
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
