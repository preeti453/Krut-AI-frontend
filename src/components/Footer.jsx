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


const Footer = () => {
    return (
        <>
            <div className='footer-container'>

                <div className='left'>
                    <h1>Stay ahead of the <span style={{ color: '#00D4EF' }}>curve</span></h1>
                    <h1>with</h1>
                    <img style={{ width: 237 }} src={logo} alt="" />
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
                            <li>Blogs</li>
                            <li>Tutorials</li>
                            <li>Pricing</li>
                            <li>Contact Us</li>
                            <li>Get Started</li>
                        </ul>
                    </div>

                    <div className='table'>
                        <h3>Tools</h3>
                        <ul>
                            <li>Product Studio</li>
                            <li>Model Studio</li>
                            <li>Background Remover</li>
                            <li>Upscaler</li>
                        </ul>
                    </div>


                    <div className='table'>
                        <h3>Tools</h3>
                        <ul>
                            <li>Magic Remove</li>
                            <li>Magic Replace</li>
                            <li>Autofill</li>
                            <li>Virtual Try-On</li>

                        </ul>
                    </div>


                </div>

            </div>

            <div className="social-icons">
                <span><img  src={mail} alt="" /></span>
                <span><img  src={discord} alt="" /></span>
                <span><img  src={linkedIn} alt="" /></span>
                <span><img  src={instagram} alt="" /></span>
                <span><img  src={x} alt="" /></span>
                <span><img  src={facebook} alt="" /></span>
                <span><img  src={youtube} alt="" /></span>
            </div>

            {/* Location + Legal */}
            <p className="location">📍 Bengaluru, Karnataka, India</p>
            <p className="legal">Privacy Policy | Terms & Conditions</p>
            <p className="legal copyright">©2024 Krut AI</p>


        </>

    )
}

export default Footer
