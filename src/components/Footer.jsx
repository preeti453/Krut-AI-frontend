import React from 'react'
import logo from '../assets/logo.png'
import './Footer.css'
import arrow from '../assets/arrow.svg'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import linkedIn from '../assets/linkedIn.png'
import youtube from '../assets/youtube.png'
import discord from '../assets/discord.png'
import github from '../assets/github.png'
import mail from '../assets/mail.png'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    //        const goToTool = (toolName) => {
    //     navigate(`/tools?tool=${encodeURIComponent(toolName)}`);
    //   };
    return (
        <>
            <div className='footer-container'>

                <div className='left'>
                    <h1>Stay ahead of the <span style={{ color: '#00D4EF' }}>curve</span></h1>
                    <h1>with</h1>
                    <img src={logo} alt="" />
                    <p>Subscribe Now !</p>
                    <div className="email-box">
                        <input type="text" placeholder='Email' />
                        {/* <img src={arrow} alt="" /> */}
                    </div>


                </div>

                <div className="right">
                    <div className='table'>
                        <h3>Company</h3>
                        <ul>
                            <li onClick={()=>navigate("/blogs")}>Blogs</li>
                            <li > <Link
                                to="https://krut-ai.notion.site/Krut-AI-User-Manual-b2d5df9733cd411e99b4e92a68c7c154"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='custom-links'
                            >
                                Tutorials
                            </Link></li>
                            <li onClick={() => navigate("/pricing")}>Pricing</li>
                            <li onClick={() => navigate("/contact")}>Contact Us</li>
                            <li onClick={() => navigate("/login")}>Get Started</li>
                        </ul>
                    </div>

                    <div className='table'>
                        <h3>Tools</h3>
                        <ul>
                            <li ><Link to="/tools/product-studio" className='custom-links'> Product Studio</Link></li>
                            <li  ><Link to="/tools/model-studio" className='custom-links'>Model Studio</Link></li>
                            <li > <Link to="/tools/background-remover" className='custom-links'>Background Remover</Link></li>
                            <li > <Link to="/tools/upscaler" className='custom-links'>Upscaler</Link></li>
                        </ul>
                    </div>


                    <div className='table'>
                        <h3>Tools</h3>
                        <ul>
                            <li > <Link to="/tools/magic-remove" className='custom-links'>Magic Remove</Link></li>
                            <li  > <Link to="/tools/magic-replace" className='custom-links'>Magic Replace</Link></li>
                            <li  > <Link to="/tools/autofill" className='custom-links'>Autofill</Link></li>
                            <li > <Link to="/tools/virtual-try-on" className='custom-links'>Virtual Try-On</Link></li>

                        </ul>
                    </div>


                </div>

            </div>

            <div className="social-icons">
                <span><img onClick={() => window.open("mailto:support@krut.ai" , "_blank")}  src={mail} alt="" /></span>
                <span> <img  onClick={() => window.open("https://discord.gg/your-discord-link", "_blank")} src={discord} alt="" /></span>
                <span><img  onClick={() => window.open("https://www.linkedin.com/company/krut-ai", "_blank")} src={linkedIn} alt="" /></span>
                <span><img  onClick={() => window.open("https://www.instagram.com/_krut.ai", "_blank")} src={instagram} alt="" /></span>
                <span><img  onClick={() => window.open("https://twitter.com/krutAI_", "_blank")} src={x} alt="" /></span>
                <span><img   onClick={() => window.open("https://facebook.com/people/Krut-AI/61559205755709/" , "_blank")}src={facebook} alt="" /></span>
                <span><img  onClick={() => window.open("https://youtube.com/channel/UCTUjDWEOkvDnLHrqX9VKnKw", "_blank")} src={youtube} alt="" /></span>
            </div>

            {/* Location + Legal */}
            <p className="location">📍 Bengaluru, Karnataka, India</p>
            <p className="legal">Privacy Policy | Terms & Conditions</p>
            <p className="legal copyright">©2024 Krut AI</p>


        </>

    )
}

export default Footer
