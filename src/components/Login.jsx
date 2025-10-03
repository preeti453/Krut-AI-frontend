import React from 'react'
import logo_black from "../assets/logo_black.png"
import "./Login.css"
import login from "../assets/login.png"
import {useState} from "react"

const Login = ({mode}) => {
    const [showPassword, setShowPassword] = useState(false);
  return (

     <div className="login-container">
      <div className="login-box">
      
        <div className="login-form">
          <div className="left-logo">
            <img src={logo_black} alt="Logo" />
          </div>

          <h2 className='h2'>{mode === "login" ? "Welcome Back!" : "Create an account"}</h2>

         
          {mode === "signup" && (
            <>
              <label className="login-label" htmlFor="firstName">First Name</label>
              <input 
                id="firstName" 
                type="text" 
                className="login-input" 
                placeholder="First Name" 
                required 
              />

              <label className="login-label" htmlFor="lastName">Last Name</label>
              <input 
                id="lastName" 
                type="text" 
                className="login-input" 
                placeholder="Last Name" 
                required 
              />
            </>
          )}

          <label className="login-label" htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            className="login-input" 
            placeholder="name@email.com" 
            required 
          />

          {mode === "login" && (
            <>
              <label className="login-label" htmlFor="password">Password</label>
              <div className="password-field">
                <input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className="login-input" 
                  required 
                />
                <span 
                  className="eye-icon" 
                  onClick={() => setShowPassword(!showPassword)}
                  role="button"
                  tabIndex={0}
                >
                  {showPassword ? "🙈" : "👁"}
                </span>
              </div>
              <a href="/forgot-password" className="forgot-password">forgot password?</a>
            </>
          )}

          <button type="submit" className="login-btn">
            {mode === "login" ? "Login" : "Verify Email"}
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="google-btn">
            <span className="google-icon">G</span> {mode === "login" ? "Sign in" : "Sign up"} with Google
          </button>

          <p className="signup-text">
            {mode === "login" ? (
              <>Don't have an account? <a href="/signup">Sign Up</a></>
            ) : (
              <>Already have an account? <a href="/login">Log In</a></>
            )}
          </p>
        </div>

       
        <div className="login-image">
          <img src={login} alt="Banner image" />
        </div>
      </div>
    </div>
  )
}

export default Login
