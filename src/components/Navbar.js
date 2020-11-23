import React from "react";
import { Navbar as NavB, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import BusinessMap from "../pages/BusinessMap";
import Home from "../pages/Home";
import "./styles/Navbar.css";

const Navbar = ({ handleLogout }) => {
  return (
    <>
      <Router>
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
              <Nav.Link href="/about">Acerca de nosotros</Nav.Link>
              <Nav.Link href="/map">Mapa</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="warning" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </Nav>
          </NavB.Collapse>
        </NavB>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/map" exact>
            <BusinessMap />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navbar;
