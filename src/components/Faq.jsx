import React from 'react'
import { useState } from "react"
import "./Faq.css"

const faqdata = [
    {
        question: "Which is the best free AI art generator?",
        answer: "There are many free image generators available online like Dall-E 3, Microsoft Designer, Dream Studio, etc but one that stands out is our art generator: Krut.AI"
    },

    {
        question: "How do I get free model photographs?",
        answer: "You can get started with the Model Studio given on Krut.AI to get model photographs for free."
    },

    {
        question: "What is the easiest way to use AI image generators?",
        answer: "Open Krut.AI's Product Studio, just input the prompt or take a recommendation and get your image in seconds."

    },
    {
        question: "What are the disadvantages of upscaling?",
        answer: "While there are cons of image upscaling like Loss of quality, limited effectiveness, and a restriction of file size, Krut.AI's Image Upscaler helps you overcome them so there are near to zero disadvantages of upscaling."
    },

    {
        question: "What is the better alternative for generative fill? ",
        answer: "Krut AI is a free AI image generator tool, which offers a huge collection of AI tools to generate and alter your pictures. Its Magic Replace feature works like Photoshop's Generative Fill, but it's even easier to use.."
    },

    {
        question: "How to remove multiple objects from a picture? ",
        answer: "To remove objects from a picture, go to Magic Remove, upload your image, select the object, and then download the result!"
    },

    {
        question: "Can I use AI-generated images for commercial use? ",
        answer: "Our terms do not limit your usage but if you want to check for other AI image generators, go to their legal section to know more."
    },
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className='faq-container'>
            <div className='heading'>
                Frequently Asked Question
            </div>


            {faqdata.map((faq, index) => (

                <div className="faq-item" key={index}>
                    <button className="faq-question" onClick={() => toggleFAQ(index)}>

                        <div className='faq-content' >

                            <div className='faq-arrow'>
                                {faq.question}

                                {openIndex === index ? (

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 7.5L10 12.5L5 7.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                )}
                            </div>
                            {/* <ChevronIcon isOpen={openIndex === index} /> */}


                            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                        </div>



                    </button>


                </div>


            ))}

            <div className='text-bottom'>
                <p>Can't find what your're looking for?    <span style={{ color: '#00D4EF' }}> Contact our Support</span></p>
             
            </div>

        </div>
    )
}

export default Faq

