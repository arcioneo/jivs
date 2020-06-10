import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './customNavigationBar.css';
import logo from '../images/logo.png';

export default function CustomNavigationBar() {

  return(
    <div id="customNavigationBar">
      <Navbar bg="light" variant="light" expand="sm">
        <Navbar.Brand href="#home"><img src={logo} width="40px" alt="" />Grupo JIVS</Navbar.Brand>
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