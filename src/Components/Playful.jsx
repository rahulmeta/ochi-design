import React, { useEffect, useState } from 'react'

const Playful = () => {

    const [rotate, setrotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY
            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setrotate(angle - 180)
        })
    })

    return (
        <div className='playful' data-scroll data-scroll-speed="0.5">
            <img src="src/assets/playful.jpg" alt="" />
            <div className='eyes'>
                <div className="whiteCircle">
                    <div className="blackCircle">
                        <div className="line" style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}>
                            <div className="smallWhiteCircle"></div>
                        </div>
                    </div>
                </div>
                <div className="whiteCircle">
                    <div className="blackCircle">
                        <div className="line" style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}>
                            <div className="smallWhiteCircle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playful