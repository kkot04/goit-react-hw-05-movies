import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'API/MovieApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(movieId).then(res => setReviews(res));
  }, [movieId]);
  return (
    <div>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(item => (
            <li key={item.id}>
              <span>{item.author}</span>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <h2>
            There are currently no reviews. This movie has not yet had time to
            talk about itself, but we hope that the reviews will be positive.
          </h2>
        )}
      </ul>
    </div>
  );
};

export default Reviews;

