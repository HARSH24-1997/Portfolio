import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../images/default-monochrome-white.svg';
import Linkedin from '../../images/linkedin.svg';
import Github from '../../images/github.svg';

function Index() {
    return (
        <Container fluid style={{ height: "20vh", width: "100%", backgroundColor: "black", padding:"0" }}>
            <Row style={{ height: "100%", width: "100%" }}>
                <Col>
                    <div style={{ float: "left", position: "absolute", top: "30%", margin:"10px" }}>
                        <img src={Logo} width="250vw" height="50%" className="d-inline-block align-top" alt="Harsh Rajput Logo" />
                    </div>
                </Col>
                <Col md="auto">
                <div style={{ height: "100%", width: "100%", display: "flex", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <div><img src={Linkedin} width="25vw" height="25vh" className="d-inline-block align-top" alt="Linkedin"/></div>
                <div><img src={Github} width="25vw" height="25vh" className="d-inline-block align-top mr-2" alt="Github"/></div>
                </div>
                </Col>
                <Col>
                    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}}>
                        <p style={{  color: "grey" }}>Contact Me</p>
                        <p style={{ color: "pink" }}>rajput16.harsh@gmail.com</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Index
