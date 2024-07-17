import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Featured = () => {

    function enter1() {
        gsap.to(".animHead1 span", {
            y: "-25%",
            stagger: 0.1,
            opacity: 1,
            duration: 0.3,
            ease: "power4.inOut"
        })
    }

    function leave1() {
        gsap.to(".animHead1 span", {
            y: "25%",
            stagger: 0.1,
            opacity: 0,
            duration: 0.3,
            ease: "power4.inOut"
        })
    }
    function enter2() {
        gsap.to(".animHead2 span", {
            y: "-25%",
            stagger: 0.1,
            opacity: 1,
            duration: 0.3,
            ease: "power4.inOut"
        })
    }

    function leave2() {
        gsap.to(".animHead2 span", {
            y: "25%",
            stagger: 0.1,
            opacity: 0,
            duration: 0.3,
            ease: "power4.inOut"
        })
    }



    return (
        <div className='featuredContainer' data-scroll data-scroll-speed="-0.1">
            <div className="featuredHeading">
                <p>Featured projects</p>
            </div>
            <div className="cards">
                <div className="cardContainer" onMouseEnter={enter1} onMouseLeave={leave1}>
                    <h1 className='animHead1'>
                        {["F", "Y", "D", "E"].map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </h1>
                    <div className="card" >
                        <img src="src/assets/cardimg1.png" alt="" />
                    </div>
                </div>
                <div className="cardContainer"onMouseEnter={enter2} onMouseLeave={leave2}>
                    <h1 className='animHead2'>
                        {["V", "I", "S", "E"].map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </h1>
                    <div className="card">
                        <img src="src/assets/cardimg2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured