import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
const About = () => {

    const locomotiveScroll = new LocomotiveScroll();

    return (
        <div className='aboutSection' data-scroll data-scroll-speed="-.5">
            <div className="aboutHeading">
                {["Ochi is a strategic partner for fast-grow­ing tech", "businesses that need to raise funds, sell prod­ucts,", "ex­plain com­plex ideas, and hire great peo­ple."].map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className="aboutMiddle">
                <div className="middleLeft">
                    <p>What you can expect:</p>
                </div>
                <div className="middleRight">
                    {["We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.", "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating."].map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
            <div className="aboutBottom">
                <div className="bottomLeft">
                    <p>Our approach:</p>
                    <button>READ MORE <div className='circle'><i class="fa-solid fa-arrow-up"></i></div></button>
                </div>
                <div className="bottomRight">
                    <div className="imgContainer">
                        <img src="src/assets/rightImg.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About