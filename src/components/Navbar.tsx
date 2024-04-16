import "../styles/Navbar.scss";
import logo from "../logo.svg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  const navItems = ["About", "Experience", "Projects"];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="LeDaniel Leung Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((nav_item) => (
              <Nav.Link href="">{nav_item}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
