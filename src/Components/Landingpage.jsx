import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Landingpage = () => {

    useGSAP(() => {
        gsap.from(".headings h1", {
            opacity: 0,
            y: "100",
            stagger: 0.3
        })
    })

    return (
        <div className='landingPage' data-scroll data-scroll-speed="-0.5">
            <div className="headingContainer">
                {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
                    <div className='headings' key={index}>
                        <h1>{item}</h1>
                    </div>
                ))}
            </div>
            <div className="landingPageBottom">
                {["For public and private companies", "From the first pitch to IPO", "START THE PROJECT"].map((item, index) => (
                    <p key={index} className={`${index === 2 && "rightBtn"}`}>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default Landingpage