import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
// import Search from "../../pages/search";
import logo from "../../assets/movie.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{ fontSize: "1rem", marginTop: "0.3rem" }}
        >
          <img
            src={logo}
            alt="movie"
            width="40"
            style={{ marginRight: "0.5rem", marginTop: "-0.7rem" }}
          />
          C&C cine
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/populares">Peliculas Populares</Nav.Link>
            <Nav.Link href="/mejores">Peliculas Mejor Puntuadas</Nav.Link>
          </Nav>

          {/* <Search /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavBar };
