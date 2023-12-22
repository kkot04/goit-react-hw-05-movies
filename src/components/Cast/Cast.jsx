import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { fetchMoviesCast } from 'API/MovieApi'
import s from './Cast.module.css'

const imgLink = 'https://image.tmdb.org/t/p/w500';

export const Cast = () => {
  const {movieId} = useParams()
  const[cast, setCast] = useState([])

  useEffect(() => {
    fetchMoviesCast(movieId).then(res => setCast(res.cast))
  }, [movieId])

  return(
    <>
    <ul>
        {cast.length !== 0 ? (
            cast.map( item => (
                <li key={item.id}>
                    
                    <h3>{item.name}</h3>
                    <span>
                        <b>Role:</b> {item.character}
                    </span>
                </li>
             ) )
        ): (<h2> We do not have information about the cast, or they have wished to
            remain anonymous.</h2>)}
        
    </ul>
    </>
  )


}
