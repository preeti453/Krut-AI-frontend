import React from 'react'

import first from '../assets/first.mp4'
import second from '../assets/second.mp4'
import third from '../assets/third.mp4'
import fourth from '../assets/fourth.mp4'
import fifth from '../assets/fifth.mp4'
import sixth from '../assets/sixth.mp4'
import seventh from '../assets/seventh.mp4'
import eighth from '../assets/eighth.webp'
import { useNavigate } from "react-router-dom";


import './Tools.css'

function Tools() {

    const navigate = useNavigate();


  

  const cards = [

    {
      type: "video",
      src: first,
      title: "Product Studio",
      desc: "Create visually appealing product photoshoots in seconds",
      slug: "product-studio"
    },
    {
      type: "video",
      src: second,
      title: "Model Studio",
      desc: "Optimize your ads with human model images, saving cost & time",
      slug:"model-studio"
    },
    {
      type: "video",

      src: third,
      title: "Background Remover",
      desc: "Instantly remove background with AI precision in seconds with automatic image recognition",
      slug:"background-remover"
    },
    {
      type: "video",

      src: fourth,
      title: "Upscaler",
      desc: "Instantly scale ANY image to 4K clarity with a click using AI precision",
      slug:"upscaler"
    },
    {
      type: "video",
      src: fifth,
      title: "Magic Remove",
      desc: "Eliminate unwanted objects and fix imperfections instantly and accurately",
      slug:"magic-remove"
    },
    {
      type: "video",

      src: sixth,
      title: "Magic Replace",
      desc: "Swap unwanted objects effortlessly with pixels perfect clarity",
      slug:"magic-replace"
    },
    {
      type: "video",
      src: seventh,
      title: "Autofill",
      desc: "Extend existing images to your desired specifications",
      slug:"autofill"
    },
    {
      type: "image",
      src: eighth,
      title: "Model Studio",
      desc: "Optimize your ads with human model images, saving cost & time",
      slug:"virtual-try-on"
    },
  ]
  
  return (


    <div className="box">
      <h1>
        <span style={{ color: "#00D4EF" }}>AI Creative Suite </span>For Your
      </h1>
      <h1>
        <span style={{ color: "#00D4EF" }}>Creative Ideas</span>
      </h1>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index} 
            onClick={() => navigate(`/tools/${card.slug}`)} // <-- navigation
            style={{ cursor: "pointer" }}
          >
            <div className="card-media">
              {card.type === "video" ? (
                <video src={card.src} controls autoPlay loop muted />
              ) : (
                <img src={card.src} alt={card.title} />
              )}
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      

      {/* <button className='button b'>Explore More</button> */}

    </div>





  )
}

export default Tools