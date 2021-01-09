import React from 'react'
import Intro from "../../components/About/Index"
import Image from "../../components/About/ImageSection"
import { Container, Row, Col } from 'react-bootstrap';

function Index() {
    return (
        <Container fluid style={{height:"100vh",width:"100wh",backgroundColor:"#F8F9FA"}}>
            <Row style={{height:"100%",width:"100%"}}>
                <Col md="6" className="my-auto mx-auto">
                    <center><Image /></center>
                </Col>
                <Col md="6" className="my-auto">
                    <Intro />
                </Col>
            </Row>
        </Container>
    )
}

export default Index
