import React from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import Logo from '../../../images/default-monochrome-white.svg';
import Linkedin from '../../../images/linkedin.svg';
import Github from '../../../images/github.svg';
import Resume from '../../../images/PDF/Harsh Rajput.pdf';

function Navbarcomp() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
          <img src={Logo} width="50%" height="50%" className="d-inline-block align-top" alt="Harsh Rajput Logo"/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/harshrajput24/" target="_blank" rel="noreferrer noopener">
            <img src={Linkedin} width="100%" height="100%" className="d-inline-block align-top" alt="Linkedin"/> 
            </Nav.Link>
            <Nav.Link href="https://github.com/HARSH24-1997" target="_blank" rel="noreferrer noopener">
            <img src={Github} width="100%" height="100%" className="d-inline-block align-top" alt="Github"/>
            </Nav.Link>
            <Button href={Resume} target="_blank" rel="noreferrer noopener" variant="outline-success" alt="Resume">Resume</Button>
          </Nav>
        </Navbar>
      </>
    )
}

export default Navbarcomp
