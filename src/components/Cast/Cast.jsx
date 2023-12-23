import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { fetchMoviesCast } from 'API/MovieApi'
import s from './Cast.module.css'


export const Cast = () => {
  const {movieId} = useParams()
  const[cast, setCast] = useState([])

  useEffect(() => {
    fetchMoviesCast(movieId).then(res => setCast(res.cast))
  }, [movieId])

  return(
    <>
    <ul className={s.list}>
        {cast.length !== 0 ? (
            cast.map( item => (
                <li key={item.id} className={s.item}>
                    
                    <h3 className={s.title}>{item.name}</h3>
                    <span className={s.text}>
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
