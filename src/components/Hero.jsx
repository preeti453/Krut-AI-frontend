import React from "react";
import './Hero.css'
import krut from "../assets/krut.mp4"
import { useNavigate } from 'react-router-dom'


function Hero() {
    const navigate = useNavigate();
    return (
        <main className="hero">
            <h1>AI <span style={{ color: '#00D4EF' }}>Co-pilot</span> for</h1>
            <h1> <span style={{ color: '#00D4EF' }}>E-commerce</span> Brands</h1>
            <div className="para">
                <p>An AI Platform that generates high-quality custom content creation for e-commerce</p>
                <p>brands without being an expert prompter.</p>
            </div>

            <ul>
                <li>Time-Efficient</li>
                <li>Cost-saving</li>
                <li>Increased Efficiency</li>
            </ul>

            <div className="krutbutton">
                <button onClick={()=>navigate("/login")}>Try Krut AI</button>
            </div>

       
            <div className="video">
                <video controls autoPlay muted loop src={krut}></video>
            </div>

            


        </main>
    )
}

export default Hero