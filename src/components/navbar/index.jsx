import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

function PallasNavBar() {
    return (
      <header>
      <Navbar expand="sm" bg="dark" variant="dark" sticky="top">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand id={"Logo Homepage Link"}>
              <img
                alt="Pallas Systems Logo"
                src="/images/logos/topbar-logo.png"
                width="60"
                height="50"
                className="d-inline-block"
              />{' '}
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/">
            <Navbar.Brand id={"Company Name Homepage Link"}>
              Pallas Systems
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle id="responsive-navbar-btn" aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Container fluid />
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link id={"Navbar Menu Homepage Link"}>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link id={"Navbar Menu Company Offered Services Link"}>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link id={"Navbar Menu Company Team Information Link"}>Team</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    );
}

export default PallasNavBar;
