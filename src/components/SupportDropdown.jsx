// SupportDropdown.jsx
import React from "react";
import "./SupportDropdown.css";

const SupportDropdown = () => {
  return (
    <div className="support-dropdown">
      {/* Blogs */}
      <a href="/blogs" className="dropdown-link">
        <div className="dropdown-item">
          <div className="icon">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 18H17V16H7V18Z" fill="currentColor"></path>
              <path d="M17 14H7V12H17V14Z" fill="currentColor"></path>
              <path d="M7 10H11V8H7V10Z" fill="currentColor"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="text-block">
            <h1 className="title">Blogs</h1>
            <p className="subtitle">Discover more on our blog</p>
          </div>
        </div>
      </a>

      {/* Tutorial */}
      <a
        href="https://krut-ai.notion.site/Krut-AI-Beta-User-Manual-b2d5df9733cd411e99b4e92a68c7c154"
        target="_blank"
        rel="noreferrer"
        className="dropdown-link"
      >
        <div className="dropdown-item">
          <div className="icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11zm10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13 11 11.09zM14.5 6 9 9l5.5 3L20 9l-5.5-3z"></path>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
            </svg>
          </div>
          <div className="text-block">
            <h1 className="title">Tutorial</h1>
            <p className="subtitle">Get insights of our impactful tools!</p>
          </div>
        </div>
      </a>

      {/* Contact */}
      <a href="/contact" className="dropdown-link">
        <div className="dropdown-item">
          <div className="icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M18.5 11c.17 0 .34.01.5.03V6.87C19 5.84 18.16 5 17.13 5H3.87C2.84 5 2 5.84 2 6.87v10.26C2 18.16 2.84 19 3.87 19h9.73c-.38-.75-.6-1.6-.6-2.5 0-3.04 2.46-5.5 5.5-5.5zm-8.1 2L4 9.19V7h.23l6.18 3.68L16.74 7H17v2.16L10.4 13z"></path>
              <path d="m19 13-1.41 1.41L19.17 16H15v2h4.17l-1.58 1.59L19 21l4-4z"></path>
            </svg>
          </div>
          <div className="text-block">
            <h1 className="title">Contact</h1>
            <p className="subtitle">Connect with us via our contact page</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SupportDropdown;
