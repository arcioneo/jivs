import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './CustomNavigationBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomNavigationBar() {

  return(
    <div className="container">
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#home">Grupo JIVS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Qui&eacute;nes somos</Nav.Link>
            <NavDropdown title="Productos y Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Panel compuesto de aluminio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}