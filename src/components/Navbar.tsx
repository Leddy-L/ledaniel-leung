import "../styles/Navbar.scss";
import logo from "../logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  const navItems = ["About", "Experience", "Projects"];

  return (
    <Navbar expand="lg" className="bg-light" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-center">
            {navItems.map((item) => (
              <Nav.Item>
                <Nav.Link href="#">{item}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
