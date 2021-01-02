import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Lottie from "react-lottie";
import animationData from "../../../images/Lottie/Blogging.json";
import Blob from "../../../images/a.svg";


function Section() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    return (
        <Container className="d-flex align-items-center" style={{height:"90vh"}}> 
            <Row style={{width:"100vw",height:"90vh"}} className="mx-auto"> 
                <Col md={4} className="mx-auto my-auto p-0">
                
                    <div style={{position:"relative",zIndex:'100'}}>
                    <img src={Blob} style={{zIndex:"-1",position:"absolute",bottom:"-40%",top:"-80%",left:"-40%"}}/>
                    <h1>Hi,</h1>
                    <h1>I'm Harsh,</h1>
                    <h1>Web Developer</h1>
                    <p>React Developer / Full Stack Developer</p>
                    </div>
                  
                </Col>
                <Col md={5}  className="mx-auto my-auto pr-5 pl-0">
                <Lottie options={defaultOptions} height={400} width={400} />
                </Col>
            </Row>   
        </Container>
    )
}

export default Section
