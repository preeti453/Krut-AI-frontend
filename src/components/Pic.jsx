import React from 'react'
import mobileApp from '../assets/mobileApp.webp'
import './Pic.css'
import { useNavigate } from 'react-router-dom'

import arrow from '../assets/arrow.svg'

const Pic = () => {
  const navigate = useNavigate();
  return (
    <div className='picContainer'>
      <img src={mobileApp} alt="" />

      <div className='text'>
        <h1>Your Vision Dictates</h1>
        <h1>Krut's Actions</h1>

        <div className='getbutton'>
          <button className="getStarted" onClick={()=>navigate("/login")}><img src={arrow} alt="" />Get Started for free</button>
        </div>

      </div>




    </div>
  )
}

export default Pic
