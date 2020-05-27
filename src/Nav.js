import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './App.css';
import image1 from './images/mdm.png';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md" >
        <NavbarBrand href="/">
        <img src={image1} height="40"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >
          <NavItem>

              <NavLink href="/" className="text-white">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Form" className="text-white">Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Submission" className="text-white">Submission</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About" className="text-white">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example; 