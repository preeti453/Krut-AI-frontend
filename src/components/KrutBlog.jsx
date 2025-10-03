import React from "react";
import "./KrutBlog.css";
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import linkedIn from '../assets/linkedIn.png'
import { useNavigate } from "react-router-dom";


const KrutBlog = ({ blog }) => {
    const navigate = useNavigate()
    return (
        <div className="bloghero-container">
            {/* Header Section */}
            <div className="bloghero-header">
                <p className="bloghero-tech">{blog.category}</p>
                <h1 className="bloghero-title">{blog.title}</h1>
            </div>

            {/* Main Content Row */}
            <div className="bloghero-row">
                {/* Main Image Section */}
                <div className="bloghero-mainimg">
                    <img
                        className="bloghero-mainimg-img"
                        src={blog.image}
                        alt={blog.title}
                    />
                </div>

                {/* Sidebar */}
                <div className="bloghero-side">
                    {/* Author Box */}
                    <div className="bloghero-author">
                        <img
                            className="bloghero-author-img"
                            src={blog.author.avatar}
                            alt={blog.author.name}
                        />
                        <div className="bloghero-author-details">
                            <h1>{blog.author.name}</h1>
                            <p>{blog.author.date}</p>
                        </div>
                    </div>

                    {/* Share Box */}
                    <div className="bloghero-share">
                        <h1 className="bloghero-share-title">Share this Article</h1>
                        <div className="bloghero-share-row">
                            <div className="bloghero-share-icons">
                                {/* Same social share links */}
                                <a href="https://facebook.com/people/Krut-AI/61559205755709/" target="_blank" rel="noreferrer">
                                    <img
                                        className="bloghero-share-icon"
                                        src={facebook}
                                        alt="facebook"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/company/krut-ai" target="_blank" rel="noreferrer">
                                    <img
                                        className="bloghero-share-icon"
                                        src={linkedIn}
                                        alt="linkedin"
                                    />
                                </a>

                                <a href="https://www.instagram.com/_krut.ai" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="bloghero-share-icon"
                                        src={instagram}
                                        alt="instagram"
                                    />
                                </a>

                                <a href="https://twitter.com/krutAI_" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="bloghero-share-icon"
                                        src={x}
                                        alt="x"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bloghero-cta">
                            <h1 className="bloghero-cta-title">Get Started For Free</h1>
                            {/* <a
                className="bloghero-cta-btn"
                href="https://krut-ai-frontend.vercel.app/login"
                target="_blank"
                rel="noreferrer"
              >
                Try Krut AI
              </a> */}

                            <button className="bloghero-cta-btn" onClick={() => navigate('/login')}>Try Krut AI</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Long Content */}
            <div className="bloghero-content">
                {blog.content}
            </div>
        </div>
    );
};

export default KrutBlog;
