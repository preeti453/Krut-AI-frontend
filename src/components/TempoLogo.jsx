import React from 'react'
import ProductHunt from "../assets/ProductHunt.svg"
import './TempoLogo.css'

function Logo() {
    return (
        <div className='logoContainer'>
            <img className='mainLogo' src={ProductHunt} alt="center logo" />
        </div>

    )
}

export default Logo