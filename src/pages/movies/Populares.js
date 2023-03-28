import React from "react";
import MoviesResults from "./MoviesResults";
import './style.css';

const Populares = () => {
  return(
    <div className="dark-theme light-theme">
    <h2>Peliculas Populares</h2>
    <MoviesResults />
    </div>
  );
} 

export default Populares