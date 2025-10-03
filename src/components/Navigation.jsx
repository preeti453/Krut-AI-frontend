import React from 'react'
import "./Navigation.css"
import logo from "../assets/logo.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

import SupportDropdown from './SupportDropdown'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setIsOpen(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [supportOpen, setSupportOpen] = useState(false);

    // const toggleSupport = () => setSupportOpen(!supportOpen);
    const toggleSupport = () => setSupportOpen(prev => !prev);
    return (
        <>
            <nav className='navbar'>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="Krut logo" />
                </div>

                <ul className="nav-links">
                    <li onClick={() => navigate("/tools")}>Tools</li>


                    <li className='nav-support'
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}>
                        Support
                        {dropdownOpen && <SupportDropdown />}
                    </li>



                    {/* <li className="nav-support">
                        <span className="nav-link">Support</span>
                        <SupportDropdown /> 
                    </li> */}
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
                            <Link to="/tools" style={{ color: 'white' }} className='custom-links'>Tools</Link>
                        </li>

                        {/* <li onClick={handleClose}>
                            Support
                        </li> */}



                        {/* Support with arrow */}
                        <li>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    color: "white",
                                }}
                                onClick={toggleSupport}
                            >
                                <span>Support</span>
                                <span style={{ marginLeft: "0.5rem" }}>
                                    {supportOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 7.5L10 12.5L5 7.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    )
                                    }
                                </span>
                            </div>

                            {/* Dropdown items */}
                            {supportOpen && (
                                <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                                    <li onClick={handleClose}>
                                        <Link
                                            to="/blogs"
                                            className="custom-links"
                                            style={{ color: "white" }}
                                        >
                                            Blogs
                                        </Link>
                                    </li>
                                    <li onClick={handleClose}>
                                        <a
                                            href="https://krut-ai.notion.site/Krut-AI-Beta-User-Manual-b2d5df9733cd411e99b4e92a68c7c154"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-links"
                                            style={{ color: "white" }}
                                        >
                                            Tutorial
                                        </a>
                                    </li>
                                    <li onClick={handleClose}>
                                        <Link
                                            to="/contact"
                                            className="custom-links"
                                            style={{ color: "white" }}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>



                        <li onClick={handleClose}>
                            <a
                                href="https://discord.gg/your-discord-invite-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'white' }}
                                className="custom-links"
                            >
                                Community
                            </a>
                        </li>

                        <li onClick={handleClose}>
                            <Link to="/pricing" style={{ color: 'white' }} className='custom-links'>Pricing</Link>
                        </li>

                        <li onClick={handleClose}>
                            <Link to="/bookademo" style={{ color: 'white' }} className='custom-links'>Book a Demo</Link>
                        </li>

                        <li onClick={handleClose}>
                            <Link to="/login" style={{ color: 'white' }} className='custom-links'>  Login</Link>
                        </li>

                        <li onClick={handleClose}>
                            <Link to="/signup" style={{ color: 'white' }} className='custom-links'>Signup</Link>
                        </li>
                    </ul>
                </div>




            </nav>
        </>
    )
}

export default Navigation
