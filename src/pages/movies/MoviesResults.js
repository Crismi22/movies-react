import React, { useState, useEffect } from "react";
import { API_KEY, URL_BASE } from "../../utils/constantes";
import { Link } from "react-router-dom";
import Pagination from "../../components/Paginador";
import "./style.css";

const MoviesResults = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState("");

  const handlePageClick = (e) => {
    const currentPage = e.selected + 1;
    setPage(currentPage);
  };

  useEffect(() => {
    const fetchResults = async () => {
      let url = `${URL_BASE}/movie/popular?api_key=${API_KEY}&page=${page}`;

      if (searchTerm) {
        url = `${URL_BASE}/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      // console.log(data) //verifica los datos recibidos de la Api
      setResults(data.results);
      // console.log(results) //verifica los resultados almacenados en el estado
    };

    fetchResults();
  }, [results, searchTerm, page]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Buscar películas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "50%" }}
        />
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
              style={{ width: "95%" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                alt={result.title}
              />
            </div>
          </Link>
        ))}
      </div>
      <Pagination handlePageClick={(e) => handlePageClick(e)} />
    </>
  );
};

export default MoviesResults;
