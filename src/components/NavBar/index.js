import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import { Nav, Navbar } from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';


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
              <Nav.Link href="/">🏛</Nav.Link>
              <Nav.Link href="/populares">Peliculas Populares</Nav.Link>
              <Nav.Link href="/mejores">Peliculas Mejor Puntuadas</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
}

export {NavBar};