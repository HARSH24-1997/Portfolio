import React from 'react'
import Skills from './Skills';
import Education from './Education';
import Achievements from './Achievements';
import Self from './Self';
import { Tabs, Tab } from 'react-bootstrap';
import "./Index.css";

function Index() {
    return (
        <>
        <h1>About Me</h1>
        <p>React Developer | Full Stack Developer</p>
        <Tabs className="bor" defaultActiveKey="About Me" id="uncontrolled-tab-example">
            <Tab className="tab" eventKey="About Me" title="About Me">
               <Self/>
               </Tab>
            <Tab eventKey="Skills" title="Skills">
                <Skills />
            </Tab>
            <Tab eventKey="Education" title="Education">
                <Education />
            </Tab>
            <Tab eventKey="Projects" title="Projects">
                <Achievements />
            </Tab>
        </Tabs>
        </>
    )
}

export default Index
