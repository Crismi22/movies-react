
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Search from '../../pages/search';


const NavBar = () => {

  

  return (
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
            <Link href="#action1">Peliculas Populares</Link>
            <Link href="#action2">Peliculas Mejor Puntuadas</Link>
          </Nav>
{/*         
          <Search setSearchResults={setSearchResults}/> */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {NavBar};