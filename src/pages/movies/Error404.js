import React from 'react';
import NoFound404 from '/src/NoFound404.jpeg';

const Error404 = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <img src={NoFound404} alt="404" />
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default Error404;
