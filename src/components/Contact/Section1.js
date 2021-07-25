import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Profile2 from "../../images/Profile2.webp";
import "./Index.css"

function Section1() {
    return (
        <>
        <Container fluid>
            <Row>
                <Col className="glassmorphism">
                   <img src={Profile2} height="75%" width="75%"/>
                   <h2>Harsh Rajput</h2> 

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Section1
