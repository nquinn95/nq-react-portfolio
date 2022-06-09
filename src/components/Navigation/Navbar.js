
import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';


const NavBar = (props) => {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return(
<div>
  <Navbar
  style={{backgroundColor: '#35605A'}}
    expand="md"
    light
  >

    <NavbarBrand style={{color: '#FBFBFB' }} href="/">
      Nicholas Quinn
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink style={{color: '#FBFBFB' }} href="https://github.com/nquinn95">
            GitHub
          </NavLink>
        </NavItem>
        <NavItem >
        <NavLink style={{color: '#FBFBFB' }} href="/projects/">
            Projects
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
)}

export default NavBar;