import '../App.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="#">CV Monitor</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Contact">Contact</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
