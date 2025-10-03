import React from 'react'
import './Card.css'
import one from '../assets/one.webp'
import two from '../assets/two.webp'
import three from '../assets/three.webp'
import four from "../assets/four.webp"
import five from "../assets/five.webp"
import six from "../assets/six.webp"
import discord from '../assets/discord.webp'
import { useNavigate } from "react-router-dom"
// import boxData from "./boxData";


const Cards = ({ showDiscord = true, goBlogs = true, showExtraCards = true }) => {
  const navigate = useNavigate()

  const data = [
    {
      src: one,
      title: "How Does Krut AI Help E-commerce Brands?",
      desc: "Read more",

    },
    {
      src: two,
      title: "Introducing Krut AI: AI Co-Pilot For E-commerce Marketplaces",
      desc: "Read more",

    },
    {
      src: three,
      title: "Craft Ads Like A Pro: AI Guides Your Human Model Creation",
      desc: "Read more",

    },

    {
      src:four,
      title:"Top 5 Image Upscalers For Stunning 4k Results (in 2024)",
      desc:"Read more",
    },

    {
      src:five,
      title:"Ideas to Visuals: The Art Of Al Product Photography",
       desc:"Read more",
    },

    {
      src:six,
      title:"AI vs Human: Who Creates Better Art?",
       desc:"Read more",
    },




  ]

  const cardsToShow = showExtraCards ? data : data.slice(0, 3);


  return (
    <div className='cardbox-container'>
      <div className="card-boxes" >
        {cardsToShow.map((data, index) => (
          <div className="card-box" key={index}  
            style={{ cursor: "pointer" }}
             onClick={() => navigate(`/blogs/${index + 1}`)} >

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
          <button onClick={()=>navigate("/blogs")}>Go to Blogs</button>
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
