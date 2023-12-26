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
    <>
      <ul>
        {cast.length !== 0 ? (
          cast.map(item => (
            <li key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <span>
                  <b>Role:</b> {item.character}
                </span>
              </div>
            </li>
          ))
        ) : (
          <h2>
            We do not have information about the cast, or they have wished to
            remain anonymous.
          </h2>
        )}
      </ul>
    </>
  );
};
export default Cast;


