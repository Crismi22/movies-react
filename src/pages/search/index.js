import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { API_KEY } from '../../utils/constantes';
import { URL_BASE } from '../../utils/constantes';
import './style.css'

const Search = ({setSearchResults}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getSearchResults = async (term) => {
    const response = await fetch(`${URL_BASE}/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

 

  const handleSearch = (event) => {
    event.preventDefault();
    const term = event.target.elements.searchTerm.value;
    setSearchTerm(term);
    getSearchResults(term);
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
    </div>
  );
};

export default Search;
