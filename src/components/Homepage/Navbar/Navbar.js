import React,{useState} from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import Logo from '../../../images/default-monochrome.svg';
import Linkedin from '../../../images/linkedin.svg';
import Github from '../../../images/github.svg';
import Resume from '../../../images/PDF/Harsh Rajput.pdf';

function Navbarcomp() {

  const [colour,setColour] = useState("white");
  const [shadow,setShadow] = useState(" ");
  const checkScrollTop = () => {
    if (window.pageYOffset === 0){
      setColour("white")
      setShadow(" ")
    } else if (window.pageYOffset > 1){
      setColour("light")
      setShadow("shadow-sm")
    }
  };


window.addEventListener('scroll', checkScrollTop)
 
    return (
        <>
        <Navbar variant="dark" bg={`${colour}`} fixed="top" className={`${shadow}`}>
          <Navbar.Brand href="#home">
          <img src={Logo} width="150vw" height="50%" className="d-inline-block align-top" alt="Harsh Rajput Logo"/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/harshrajput24/" target="_blank" rel="noreferrer noopener">
            <img src={Linkedin} width="25vw" height="25vh" className="d-inline-block align-top" alt="Linkedin"/> 
            </Nav.Link>
            <Nav.Link href="https://github.com/HARSH24-1997" target="_blank" rel="noreferrer noopener">
            <img src={Github} width="25vw" height="25vh" className="d-inline-block align-top mr-2" alt="Github"/>
            </Nav.Link>
            <Button href={Resume} target="_blank" rel="noreferrer noopener" variant="outline-success" alt="Resume">Resume</Button>
          </Nav>
        </Navbar>
      </>
    )
}

export default Navbarcomp
