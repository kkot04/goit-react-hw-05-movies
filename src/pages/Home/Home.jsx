import React, {useState, useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";
import {fetchMoviesTrend} from 'API/MovieApi'
import s from './Home.module.css'



export const Home = () => {

    const location = useLocation()

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchMoviesTrend().then(response => setMovies(response.results));
    }, [])


    return(
        <>
        <h1 className={s.homeTitle}>Today's trends</h1>
        <ul className={s.homeList}>
            {movies.map(movie => (
                <li key={movie.id} className={s.homeItem}>
                    <NavLink 
                    className={s.homeNavLink}
                    state={{ from: location }}
                    to={`/movies/${movie.id.toString()}`}>
                        <p className={s.homeText}>{movie.title}</p>

                    </NavLink>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Home


