import React from 'react'
import { Link } from 'react-scroll';
import {OverlayTrigger,Button,Tooltip} from "react-bootstrap"
import "./Index.css";

function ClickToId() {
    return (
      <div className="ClickToId">
        <Link activeclassName="active" to="Homepage" spy={true} smooth={true} duration={500} >
      <OverlayTrigger
      key="right"
      placement="right"
      overlay={
        <Tooltip id="tooltip-right">
         Intro
        </Tooltip>
      }>
        <div className="rect my-2"></div>
    </OverlayTrigger></Link>
    <Link activeclassName="active" to="About" spy={true} smooth={true} duration={500} >
      <OverlayTrigger
      key="right"
      placement="right"
      overlay={
        <Tooltip id="tooltip-right">
         About
        </Tooltip>
      }>
        <div className="rect my-2"></div>
    </OverlayTrigger></Link>
    <Link activeclassName="active" to="Contact" spy={true} smooth={true} duration={500} >
      <OverlayTrigger
      key="right"
      placement="right"
      overlay={
        <Tooltip id="tooltip-right">
         Contact
        </Tooltip>
      }>
        <div className="rect my-2"></div>
    </OverlayTrigger></Link>
      </div>
    )
}

export default ClickToId
