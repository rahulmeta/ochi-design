import React from 'react'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Playful from './Components/Playful'
import Featured from './Components/Featured'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div id="main">
      <div className="page-1">
        <Navbar />
        <Landingpage />
      </div>
      <Marquee />
      <About />
      <Playful />
      <Featured />
    </div>
  )
}

export default App
