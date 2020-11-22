import React from "react";
import "./styles/Home.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import Maps from "../pages/Maps";
import credentials from "../credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?=3.exp&key=${credentials.mapsKey}`;

const Home = ({ handleLogout }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Treinta</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#pricing">Mapa</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="warning" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Maps
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando</p>}
      />
    </>
  );
};

export default Home;
