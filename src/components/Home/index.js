import React from "react";
import MoviesResults from "../../pages/movies/MoviesResults";

const Home = ({ movies }) => {
  return(
    <div>
        <h2>aca dentro de home el carrusel?</h2>
        <MoviesResults movies={movies} />
    </div>
  );
};

export default Home;
