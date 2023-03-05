import React, { useState, useEffect } from 'react';
import { API_KEY, URL_BASE } from '../../utils/constantes';
import Search from '../search';

const MoviesResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(`${URL_BASE}/movie/popular?api_key=${API_KEY}`);
      const data = await response.json();
      setResults(data.results);
    };

    fetchResults();
  }, []);



  return (
    <>
    <Search />
    <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', gridAutoRows: 'auto' }}>
      {results.map(result => (
        <div key={result.id} style={{ width: '100%', height: 'auto', padding: '10px' }}>
          <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt={result.title} />
          <h2>{result.title}</h2>
          {/* <p>{result.overview}</p> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default MoviesResults