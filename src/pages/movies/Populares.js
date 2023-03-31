import React from "react";
import MoviesResults from "./MoviesResults";
import "./style.css";
import popular from "../../assets/popcorn.png";

const Populares = () => {
  return (
    <>
      <div className="titulo-seccion">
        <img src={popular} alt="populares" />
        <h2>Peliculas Populares</h2>
      </div>
      <MoviesResults />
    </>
  );
};

export default Populares;
