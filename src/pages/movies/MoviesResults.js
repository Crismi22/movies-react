import React, { useState, useEffect } from "react";
import { API_KEY, URL_BASE } from "../../utils/constantes";
import { Link } from "react-router-dom";
import './style.css';


const MoviesResults = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      let url = `${URL_BASE}/movie/popular?api_key=${API_KEY}`;

      if (searchTerm) {
        url = `${URL_BASE}/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      console.log(data) //verifica los datos recibidos de la Api
      setResults(data.results);
      console.log(results) //verifica los resultados almacenados en el estado
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <>
      <div className='dark-theme ligth-theme' style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Buscar películas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "50%" }}
        />
        {/* <button onClick={() => setSearchTerm("")}>Buscar</button> */}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 25% 25% 25%",
          gridAutoRows: "auto",
        }}
      >
        {results.map((result) => (
          <Link key={result.id} to={`/movie/${result.id}`}>
            <div
              className="card-movies"
              key={result.id}
              style={{ width: "95%" }}>

              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                alt={result.title}
              />
              <h2>{result.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MoviesResults;
