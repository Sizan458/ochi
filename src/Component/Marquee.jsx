import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.2' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
       <div className='border-b-2 border-t-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden'>
       <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",  repeat:Infinity, duration:5,delay:1}} className='pr-20 text-[15vw]  leading-none font-semibold  '>WE ARE OCHI  </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",  repeat:Infinity, duration:5,delay:1}}  className=' pr-20 text-[15vw] leading-none font-semibold  '>WE ARE OCHI  </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",  repeat:Infinity, duration:5,delay:1}}  className=' pr-20 text-[15vw] leading-none font-semibold  '>WE ARE OCHI  </motion.h1>
       </div>
    </div>
  )
}

export default Marquee