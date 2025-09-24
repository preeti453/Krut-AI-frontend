import React from 'react'
import './Card.css'
import one from '../assets/one.webp'
import two from '../assets/two.webp'
import three from '../assets/three.webp'
import discord from '../assets/discord.webp'
import { useNavigate } from "react-router-dom"


const Cards = ({ showDiscord = true, goBlogs = true }) => {
  const navigate = useNavigate()

  const data = [
    {
      src: one,
      title: "How Does Krut AI Help E-commerce Brands?",
      desc: "Read more"
    },
    {
      src: two,
      title: "Introducing Krut AI: AI Co-Pilot For E-commerce Marketplaces",
      desc: "Read more"
    },
    {
      src: three,
      title: "Craft Ads Like A Pro: AI Guides Your Human Model Creation",
      desc: "Read more"
    },


  ]
  return (
    <div className='cardbox-container'>
      <div className="card-boxes">
        {data.map((data, index) => (
          <div className="card-box" key={index}>
            <div className="card-box-media">

              <img src={data.src} alt={data.title} />

            </div>
            <div className="card-box-content">
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}



      </div>

      {goBlogs && (
        <div className="goToButton">
          <button>Go to Blogs</button>
        </div>

      )}

      {showDiscord && (
        <div className="largeContainer">
          <div className="imageSection">
            <img src={discord} alt="Discord" />
          </div>
          <div className="textSection">
            <p>
              Share your ideas and get inspired. Connect with like-minded creators and
              discuss your ideas on our <strong>Discord server</strong>
            </p>
            <button

              className="discordBtn" onClick={() => window.open("https://discord.gg/your-discord-link", "_blank")}>Join Discord</button>
          </div>
        </div>
      )}




    </div>


  )
}

export default Cards
