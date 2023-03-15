import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Search from '../../pages/search';
import { useState } from 'react';
import  Home  from '../Home';




const NavBar = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
      <>
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Buscador de Peliculas</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">🏛</Nav.Link>
              <Nav.Link href="/populares">Peliculas Populares</Nav.Link>
              <Nav.Link href="/mejores">Peliculas Mejor Puntuadas</Nav.Link>
            </Nav>
            
            <Search setSearchResults={setSearchResults} />
            
          </Navbar.Collapse>
        </Container>
       
      </Navbar>
      {searchResults.length > 0 && <Home movies={searchResults} />}
  
    </>
  );
}

export {NavBar};