import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../images/default-monochrome.svg';

function Index() {
    return (
        <Container fluid style={{ height: "20vh", width: "100%", backgroundColor: "black" }}>
            <Row style={{ height: "100%", width: "100%"}}>
                <div style={{overflow:"auto",height: "100%", width: "100%" ,position:"relative"}}>
                <div style={{float:"left", position: "absolute", top: "50%"}}>
                    <img src={Logo} width="150vw" height="50%" className="d-inline-block align-top" alt="Harsh Rajput Logo" />
                </div>
                <div style={{float:"right",color:"white"}} >
                    <p>Contact Me</p>
                    <p>rajput16.harsh@gmail.com</p>
                    <p>8076062190</p>
                </div>
                </div>
            </Row>
        </Container>
    )
}

export default Index
