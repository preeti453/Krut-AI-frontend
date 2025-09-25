import React from "react";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate()
    return (
    <div className="blog-section ">
        <h1 className="blog-title">
            Blogs
        </h1>
        <p className="blog-description">
            Get Valuable insights, practical tips, and thought-provoking analyses to keep you informed and inspired.
        </p>

        <div className="blog-content-container">
            <div className="blog-main-content">
                <h1 className="blog-main-title">
                    How Does Krut AI Help E-commerce Brands?
                </h1>
                <p className="blog-main-text">
                    In a highly competitive e-commerce space, where creating content is still tough using different AI tools, that leads to a loss in ROI, reduced productivity, and a lot of time consumption because 85% of the creators still have no prompt writing skills. That’s where Krut AI emerges as an AI co-pilot for e-commerce brands that generate high-quality custom content creation without being an expert prompter by offering time efficiency, cost-saving, and increased efficiency.
                </p>
            </div>

            <div className="blog-sidebar">
                <div className="blog-sidebar-dot"></div>
                <h1 className="blog-sidebar-title">
                    Recent Post
                </h1>
                <button className="button" onClick={()=> navigate("/card1")}>
                    Read more
                </button>
            </div>
        </div>
    </div>
)
    
};

export default Blogs;
