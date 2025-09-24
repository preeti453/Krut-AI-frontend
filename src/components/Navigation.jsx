import React from 'react'
import "./Navigation.css"
import logo from "../assets/logo.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setIsOpen(false);
    return (
        <>
            <nav className='navbar'>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="Krut logo" />
                </div>

                <ul className="nav-links">
                    <li onClick={() => navigate("/tools")}>Tools</li>
                    <li>Support</li>
                    <li onClick={() => window.open("https://discord.gg/your-discord-link", "_blank")}>

                        Community

                    </li>
                    <li onClick={() => navigate("/pricing")}>Pricing</li>
                </ul>

                <div className="buttons">
                    <button onClick={() => navigate("/bookademo")} className='button'>Book a Demo</button>
                    <button onClick={() => navigate("/login")} className='button'>Get Started</button>
                </div>

                <div className='hamburger' onClick={() => setIsOpen(!isOpen)}
                > {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
                        <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
                        <path d="M4 5L20 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 19L20 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )

                    }

                </div>


                <div className={`overlay ${isOpen ? "show" : ""}`}>
                    <ul>
                        <li onClick={handleClose} >
                            <Link to="/tools" style={{ color: 'white' }}>Tools</Link>
                        </li>

                        <li onClick={handleClose}>
                            Support
                        </li>

                        

                        <li onClick={handleClose}>
                            Community
                        </li>

                        <li onClick={handleClose}>
                            Pricing
                        </li>

                        <li onClick={handleClose}>
                            <Link to="/bookademo" style={{ color: 'white' }}>Book a Demo</Link>
                        </li>

                        <li onClick={handleClose}>
                            <Link to="/login" style={{ color: 'white' }}>Login</Link>
                        </li>

                        <li onClick={handleClose}>
                            <Link to="/signup" style={{ color: 'white' }}>Signup</Link>
                        </li>
                    </ul>
                </div>




            </nav>
        </>
    )
}

export default Navigation
