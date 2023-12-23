import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchMoviesReviews } from 'API/MovieApi'
import s from './Reviews.module.css'

export const Reviews = () => {
    const {movieId} = useParams()
    const [review, setReview] = useState([]) 

    useEffect(() => {
        fetchMoviesReviews(movieId).then(res => {setReview(res)})
    }, [movieId])


    return(
        <div>
            <ul className={s.list}>
                {review.length !== 0 ? (
                review.map(item => (
                    <li key={item.id} className={s.item}> 
                    <span className={s.span}>{item.author}</span>
                    <p className={s.text}>{item.content}</p>
                    </li>
                ))
            ) : (<h2 className={s.title}>There are currently no reviews. This movie has not yet had time to
                talk about itself, but we hope that the reviews will be positive.</h2>)}
            </ul>
        </div>
    )
}
