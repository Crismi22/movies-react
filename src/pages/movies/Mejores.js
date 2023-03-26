import React, { useState, useEffect } from "react";
import { API_KEY, URL_BASE } from "../../utils/constantes";

const Mejores = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      let url = `${URL_BASE}/movie/top_rated?api_key=${API_KEY}`;

      if (searchTerm) {
        url = `${URL_BASE}/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setResults(data.results);
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <>
      <h2>Peliculas Mejor Puntuadas</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Buscar películas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "50%" }}
        />
        <button onClick={() => setSearchTerm("")}>Buscar</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 25% 25% 25%",
          gridAutoRows: "auto",
        }}
      >
        {results.map((result) => (
          <div
            key={result.id}
            style={{ width: "100%", height: "auto", padding: "10px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              alt={result.title}
            />
            <h2>{result.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mejores;
