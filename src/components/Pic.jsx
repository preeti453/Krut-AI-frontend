import React from 'react'
import mobileApp from '../assets/mobileApp.webp'
import './Pic.css'

import arrow from '../assets/arrow.svg'

const Pic = () => {
  return (
    <div className='picContainer'>
      <img src={mobileApp} alt="" />

      <div className='text'>
        <h1>Your Vision Dictates</h1>
        <h1>Krut's Actions</h1>

        <div >
          <button className="getStarted"><img src={arrow} alt="" />Get Started for free</button>
        </div>

      </div>




    </div>
  )
}

export default Pic
