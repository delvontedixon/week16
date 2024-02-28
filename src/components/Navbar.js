import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowswerRouter, Link } from "react-router-dom";

function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">COACHES CORNER</Navbar.Brand>
        <Nav className="me-auto">
          {/* link to correspond to home route */}
          <Link className="nav-link" to="/userprofile">
            Home
          </Link>
          {/* link to correspond to userprofile route */}
          {/* <Link className="nav-link" to="/userprofile">
            Profile
          </Link> */}
          {/* link to correspond to background route */}
          <Link className="nav-link" to="/background">
            Coaches Background
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigationbar;

//https://react-bootstrap.netlify.app/docs/components/navbar/
