import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

const Marquee = () => {

    const locomotiveScroll = new LocomotiveScroll();

    return (
        <div className='marquee' data-scroll data-scroll-speed=".2">
            <div className="marqueeText">
                <h1>WE ARE OCHI</h1>
                <h1>WE ARE OCHI</h1>
                <h1>WE ARE OCHI</h1>
                <h1>WE ARE OCHI</h1>
                <h1>WE ARE OCHI</h1>
            </div>
        </div>
    )
}

export default Marquee