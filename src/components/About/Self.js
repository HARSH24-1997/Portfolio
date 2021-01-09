import React from 'react'
import linkedin from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import { Row,Button } from 'react-bootstrap'

function Self() {
    return (
        <>
        <p>
            I'm student of Jaypee Institute Of Information Technology (2017-2021). I enjoy solving software problems and knack in web development.Well-qualified Full Stack Developer familiar with
            a wide range of programming utilities and languages. Knowledgeable of backend and
            frontend development requirements. Able to handle any part of the process with ease. Collaborative team player with excellent
            technical abilities and a knack for web development.
        </p>
        <div className="clearfix">
            <div className="float-left">
            <Button variant="outline-primary">Contact Me</Button>
            <div >
                <Row className="mx-auto my-3">
                    <img className="mr-3" src={linkedin} heigh="25vh" width="25vw"/>
                    <img className="mr-3" src={github} heigh="25vh" width="25vw"/>
                    <img className="mr-3" src={github} heigh="25vh" width="25vw"/>
                </Row>
            </div>
            </div>
            <div className="float-right">
            <Button variant="outline-primary">Download Resume</Button>    
            </div>
        </div>
        </>
    )
}

export default Self
