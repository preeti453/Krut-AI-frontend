import React from 'react'
import { useParams } from "react-router-dom";
import first from '../assets/first.mp4'
import second from '../assets/second.mp4'
import third from '../assets/third.mp4'
import fourth from '../assets/fourth.mp4'
import fifth from '../assets/fifth.mp4'
import sixth from '../assets/sixth.mp4'
import seventh from '../assets/seventh.mp4'
import eighth from '../assets/eighth.webp'
import Ps from "../assets/Ps.webp"
import ms from "../assets/ms.webp"
import br from "../assets/br.webp"
import up from "../assets/up.webp"
import mr from "../assets/mr.webp"
import replace from "../assets/replace.webp"
import autofill from "../assets/autofill.webp"
import l from "../assets/l.webp"
import productStudio_after from "../assets/productStudio_after.webp"
import modelStudio_after from "../assets/modelStudio_after.webp"
import bgRemove_after from "../assets/bgRemove_after.webp"
import upscaler_after from "../assets/upscaler_after.webp"
import remove_after from "../assets/remove_after.webp"
import replace_after from "../assets/replace_after.webp"
import autofill_after from "../assets/autofill_after.webp"
import tryOn_after from "../assets/tryOn_after.webp"
import { useState } from "react"
import "./ToolPage.css"
import { useNavigate } from 'react-router-dom'



const ToolPage = () => {
    const navigate = useNavigate();
    const { toolName } = useParams();
    const [sliderValue, setSliderValue] = useState(1);


    const tools = {
        "product-studio": {
            title: "Product Studio",
            description: "Create visually appealing product photoshoots in seconds",
            Src: first,
            beforeImageSrc: Ps,
            afterImageSrc: productStudio_after
        },

        "model-studio": {
            title: "Model Studio",
            description: "Optimize your ads with human model images, saving cost & time",
            Src: second,
            beforeImageSrc: ms,
            afterImageSrc: modelStudio_after
        },

        "background-remover": {
            title: "Background Remover",
            description: "Instantly remove background with AI precision in seconds with automatic image recognition",
            Src: third,
            beforeImageSrc: br,
            afterImageSrc: bgRemove_after

        },

        "upscaler": {
            title: "Upscaler",
            description: "Instantly scale ANY image to 4K clarity with a click using AI precision",
            Src: fourth,
            beforeImageSrc: up,
            afterImageSrc: upscaler_after
        },



        "magic-remove": {
            title: "Magic Remove",
            description:
                "Eliminate unwanted objects and fix imperfections instantly and accurately",
            Src: fifth,
            beforeImageSrc: mr,
            afterImageSrc: remove_after
        },

        "magic-replace": {
            title: "Magic Replace",
            description: "Swap unwanted objects effortlessly with pixels perfect clarity",
            Src: sixth,
            beforeImageSrc: replace,
            afterImageSrc: replace_after
        },

        "autofill": {
            title: "Autofill",
            description: "Extend existing images to your desired specifications",
            Src: seventh,
            beforeImageSrc: autofill,
            afterImageSrc: autofill_after
        },

        "virtual-try-on": {
            title: "Model Studio",
            description: "Optimize your ads with human model images, saving cost & time",
            Src: eighth,
            beforeImageSrc: l,
            afterImageSrc: tryOn_after
        }



    };

    const tool = tools[toolName]; // get the right tool by query param

    if (!tool) {
        return (
            <div className="product-box-container">
                <h1>Tool not found</h1>
                <p>Please select a valid tool.</p>
            </div>
        );
    }

    return (
        <div className="product-box-container">
            <div className="product-studio-box">
                <div className="text-center">
                    <div className="heading-container">
                        <h1 className="title">{tool.title}</h1>
                        <div className="subtitle-container">
                            <p className="description">{tool.description}</p>
                        </div>
                    </div>
                </div>


                <div className="video-container">
                    {tool.Src.endsWith(".webp") ? (
                        <img
                            src={tool.Src}
                            alt={`${tool.title} preview`}
                            className="studio-video"
                            style={{
                                display: 'none'
                            }}
                        />
                    ) : (
                        <video className="studio-video" controls autoPlay loop muted>
                            <source src={tool.Src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                </div>

                {/* Image Section */}
                <div className="range">


                    <div className="pair-flex">
                        {/* Left Image */}
                        <div className="pair-img-wrapper">
                            <img
                                className="pair-img"
                                src={tool.beforeImageSrc}
                                alt="Product before"
                            />
                        </div>
                        {/* Right Blank Box */}




                        {/* <div className="pair-blank-box" style={{
                            backgroundColor:sliderValue === 100 ?"transparent":"",
                            
                        }}>
                            <img
                                className="pair-img pair-img-right"
                                src={tool.afterImageSrc}
                                alt="Product After"
                            />
                        </div> */}

                        {sliderValue === 100 ? (
                            // Only show image when slider = 100
                            <img
                                className="pair-img pair-img-right"
                                src={tool.afterImageSrc}
                                alt="Product After"
                            />
                        ) : (
                            // Show div + image otherwise
                            <div className="pair-blank-box">
                                <img
                                    className="pair-img pair-img-right"
                                    src={tool.afterImageSrc}
                                    alt="Product After"
                                />
                            </div>
                        )}




                    </div>


                    <div className="slider-outer">

                        <input
                            type="range"
                            id="Slider"
                            name="Slider"
                            min={1}
                            max={100}
                            value={sliderValue}

                            className="slider"
                            onChange={e => setSliderValue(Number(e.target.value))}
                            style={{
                                "--range-value": sliderValue,
                            }}


                        />

                        {sliderValue ===1 && (
                            <>
                                <span className="slider-label slider-label-desktop">Swipe to the Future</span>
                                <span className="slider-label slider-label-mobile">Swipe it</span>
                            </>
                        )}
                        {/* <div className="slider-label-wrapper">
                            <div className="slider-label-flex">
                                <span className="slider-label-mobile">Swipe it</span>
                                <span className="slider-label-desktop">Swipe to the Future</span>
                            </div>

                        </div> */}


                    </div>

                </div>


            </div>

            {/* CTA Button */}
            <div className="krutbutton pb" >
                <button onClick={() => navigate("/login")}>Try Krut AI</button>
                {/* <button onClick={() => console.log("Clicked")}>Try Krut AI</button> */}

            </div>
        </div>
    );
};

export default ToolPage;
