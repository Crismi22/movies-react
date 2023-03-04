import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import './App.css';

function App() {

  // const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  return (
    <div className="App">
      <NavBar setSearchResults={setSearchResults} />
      <Home searchResults={searchResults} /><h1>aca iria home</h1>
      <h2>dentro de home el carrusel</h2>
      <h2>dos secciones con populares y mejores</h2>
      <footer>aca iria componente footer</footer>
    </div>
  );
}

export default App;
