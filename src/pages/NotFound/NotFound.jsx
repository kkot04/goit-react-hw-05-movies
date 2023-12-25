import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>
        <div>
          <h2>
            Nothing was found for your request. This page is not available,
            error 404, capisci.
          </h2>
          <NavLink to="/">
            <span>Go back home!</span>
          </NavLink>
          </div>
      </div>
    </>
  );
};

export default NotFound;

