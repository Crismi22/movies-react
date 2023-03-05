import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { API_KEY } from '../../utils/constantes';
import { URL_BASE } from '../../utils/constantes';
import './style.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = async () => {
    const response = await fetch(`${URL_BASE}/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

  useEffect(() => {
    if (searchTerm) {
      getSearchResults(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    const term = event.target.elements.searchTerm.value;
    setSearchTerm(term);
  };

  return (
    <div>
      <Form onSubmit={handleSearch} className="input-search">
        <FormControl
          type="text"
          name="searchTerm"
          placeholder="Busca una pelicula"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Button variant="outline-dark" type="submit" className='btn-search'>
          Buscar
        </Button>
      </Form>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gridAutoRows: 'auto',
          gap: '10px',
        }}
      >
        {searchResults.map((result) => (
          <div key={result.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              alt={result.title}
            />
            <h2>{result.title}</h2>
            {/* <p>{result.overview}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
