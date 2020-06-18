import React, {useState} from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './customNavigationBar.css';
import logo from '../images/logo.png';

export default function CustomNavigationBar(props) {
  const [expanded, setExpanded] = useState(false);

  function menuClicked(componentClicked) {
    setExpanded(false)
    props.menuClicked(componentClicked)
  }



  return(
    <div id="customNavigationBar">
      <Navbar bg="light" variant="light" expand="sm" expanded={expanded}>
        <Navbar.Brand href="#"><img src={logo} width="60px" alt="" />Grupo SEJIV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => menuClicked('aboutUs')}>Qui&eacute;nes somos</Nav.Link>
            <NavDropdown title="Productos y Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => menuClicked('panelCompuesto')}>Panel compuesto de aluminio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => menuClicked('contacto')}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}