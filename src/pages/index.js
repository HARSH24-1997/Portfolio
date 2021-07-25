import React from "react"
import ClickToId from "../components/Utils/ClickToId";
import Homepage from '../pages/Homepage/index'
import About from '../pages/About/Index';
import Footer from '../pages/Footer/Index';
// import Contact from '../pages/Contact/Index';
import "./Index.css"

const IndexPage = () => (
  <>
  <ClickToId/>
  <div id="Homepage"><Homepage/></div>
  <div id="About"><About /></div>
  <div id="Footer"><Footer /></div>
  {/* <div id="Contact"><Contact /></div> */}
  </>
)

export default IndexPage
