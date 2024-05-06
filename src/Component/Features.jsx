
import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Features() {
 const cards=[useAnimation(),useAnimation()]
 const handleHover=(index)=>{
  cards[index].start({
    y:'0'
  }) 
 }
 const handleHoverEND=(index)=>{
  cards[index].start({
    y:'100%'
  }) 
 }

  return (
    <div className='w-full py-10  '>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-2xl font-bold tracking-tight'>Featured projects</h1>
           
        </div>
        <div className='px-20'>
        <div className="cards w-full   grid grid-cols-1  gap-10 lg:grid-cols-2 mt-8">
           
                <motion.div  onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEND(0)} className="cardContainer  relative h-[50vh]  md:h-[65vh] lg:h-[75vh]  ">
                  <h1 className=' absolute overflow-hidden  flex left-[50%] lg:left-full -translate-x-1/2  top-1/2  -translate-y-1/2  text-7xl leading-none  tracking-tighter text-[rgb(114,125,75)]'>
                  {'FYDE'.split(' ').map((item , index) =>
                  <motion.span initial={{y:'100%'}}  animate={cards[0]} transition={{ease:[0.83, 0, 0.17, 1] , delay:index*.01}} key={index} className=' inline-block' >{item}</motion.span>)}
                  </h1>
                  <div className='card w-full h-full  rounded-xl bg-green-500 '>
                    <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt=""  />
                  </div>

                </motion.div>
                <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEND(1)} className="cardContainer relative    h-[50vh]  md:h-[65vh] lg:h-[75vh]   bg-zinc-600">
                <h1 className=' absolute  overflow-hidden right-[50%]  lg:right-full translate-x-1/2  top-1/2  -translate-y-1/2  text-8xl leading-none  tracking-tighter text-[rgb(114,125,75)]'>
                {'VISE'.split(' ').map((item , index) =><motion.span initial={{y:'100%'}}  animate={cards[1]} transition={{ease:[0.83, 0, 0.17, 1] , delay:index*.01}} key={index} className=' inline-block' >{item}</motion.span>)}
                </h1>
                  <div className='card w-full h-full  rounded-xl bg-green-500 '>
                  <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt=""  />
                  </div>
                </motion.div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Features