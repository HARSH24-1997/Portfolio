import React from 'react'
import About from "../../images/About.png"

function ImageSection() {
    return (
        <>
            <img src={About} className="shadow-lg" style={{ zIndex: "-1" }} height="85%" width="85%" />
        </>
    )
}

export default ImageSection
