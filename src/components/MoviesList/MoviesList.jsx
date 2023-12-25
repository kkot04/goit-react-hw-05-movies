import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'API/MovieApi';
import s from './MoviesList.module.css'




export const MoviesList = () => {
    const [moviesData, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
  
    const movie = searchParams.get('movie') ?? '';
  

  
    useEffect(() => {
      async function getNewMovies() {
        try {
          const moviesDataNew = await fetchMoviesBySearch(movie);
          setMovies(moviesDataNew);
        } catch (error) {
          console.log(error);
        }
      }
      getNewMovies();
    }, [movie]);

return(
    <ul className={s.mList}>
        {moviesData.map(movie => (
          <li className={s.mItem} key={movie.id}>
            <NavLink className={s.mNavLinl} state={{ from: location }} to={movie.id.toString()}>          
              <p>{movie.title}</p>
              <p>{movie.media_type}</p>
            </NavLink>
          </li>
        ))}
      </ul>
)
}
