import React from "react"
import './Partners.css'
import github from '../assets/github.png'
import shellcode from '../assets/shellcode.png'
import aws from '../assets/aws.png'
import mongodb from '../assets/mongodb.png'
import nvindia from '../assets/nvindia.png'
import startupIndia from '../assets/startupIndia.png'

function Partners(){
    return(
        <div className="partner-container">
            <div className="partner1 first-partner">
                <h1>Our Trusted Partners</h1>

                <div className="partner-logos">
                    <img src={github} alt="" />
                    <img src={shellcode } alt="" />
                    <img src={aws} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={nvindia} alt="" />
                </div>
            </div>

            <div className="partner1 second-partner">
                <h1>Recognized By</h1>

                <div className="partner-logo">
                    <img  src={startupIndia} alt="" />

                </div>
            
            </div>

        </div>
    )
}

export default Partners