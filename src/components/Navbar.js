import React from "react";
import { Navbar as NavB, Nav, Button } from "react-bootstrap";
import "./styles/Navbar.css";

const Navbar = ({ handleLogout }) => {
  return (
    <>
      <NavB
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="bg-white"
      >
        <NavB.Brand href="#home">
          <img
            src="https://www.treinta.co/wp-content/uploads/2020/08/treinta-logo-yellow-gmail-1.png"
            width="90"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </NavB.Brand>
        <NavB.Toggle aria-controls="responsive-NavB-nav" />
        <NavB.Collapse id="responsive-NavB-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#pricing">Mapa</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="warning" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </NavB.Collapse>
      </NavB>
    </>
  );
};

export default Navbar;
