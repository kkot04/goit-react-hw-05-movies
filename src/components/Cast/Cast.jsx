import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'API/MovieApi';



const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);
  return (
    <div>
    <h2>Cast</h2>
    <ul>
      {cast.map(item => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.character}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};
export default Cast;


