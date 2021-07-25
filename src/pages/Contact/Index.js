import React from 'react'
import Section1 from '../../components/Contact/Section1';
import Section2 from '../../components/Contact/Section2';
import { Container,Row, Col } from 'react-bootstrap'

function Index() {
    return (
        <Container fluid style={{height:"100vh",width:"100wh",backgroundColor:"#F8F9FA"}}>
            <Row style={{height:"100%",width:"100%"}}>
            <Col md="6" className="my-auto mx-auto">
                   <Section1/> 
                </Col>
                <Col md="6" className="my-auto">
                    <Section2/>
                </Col>
            </Row>
        </Container>
    )
}

export default Index
