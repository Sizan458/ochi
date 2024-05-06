import React from 'react'

import LandingPage from './Component/LandingPage'
import Nav from './Component/Nav'
import Marquee from './Component/Marquee'
import About from './Component/About'
import Eyes from './Component/Eyes'
import Features from './Component/Features'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Eyes2 from './Component/Eyes2'
import Nav2 from './Component/Nav2'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  //const [loading, Loaders] = Loader();
  return (
    <div className=' w-full min-h-screen bg-zinc-900 text-white'>
     <div className=' block lg:hidden'> <Nav2/></div>
    <div className=' hidden  lg:block'>
    <Nav/>
    </div>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
      
      <Cards/>
      <Eyes2/>
      <Footer/>
    </div>
  )
}

export default App