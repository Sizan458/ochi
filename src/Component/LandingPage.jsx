import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    motion
  return (
    <div data-scroll data-scroll-speed='-.3' className=' pt-1'>
        
        <div className="text mt-52 px-20 ">
        {['We Create','Eye Opening','PRESENTATIONS'].map((item, index) =>{
            return(
                <div className="masker  overflow-hidden" key={index}>
               <div className='w-fit flex '>
                {index===1 && (< motion.div initial={{width:0}} animate={{width:'9vw'}} transition={{ease:[0.45, 0, 0.55, 1],duration:1}}  className='w-[9vw] h-[6vw] relative top-[1.5vw] bg-red-400'></motion.div>)}
               <h1 className=' flex items-center  uppercase text-[8vw] h-full  leading-[7vw] font-semibold'>
                 {item}
                </h1>
               </div>
            </div>
            )
        })}
          
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20  text-xl  grid grid-cols-1 gap-5 justify-between items-center py-5 px-20 md:grid-cols-3 '>
            {["For public and private companies",'From the first pitch to IPO'].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none md:text-sm' key={index}>{item}</p>
            ))}
            <div className="start flex">
                <div className='px-4 py-2 border-[1px]  border-zinc-400 font-light text-xl rounded-full capitalize md:text-sm'>Start the project</div>
                <div className='w-10 h-10  border-[1px] flex items-center justify-center  border-zinc-400 rounded-full md:text-sm '>
                    <span className=' rotate-45'><FaArrowUpLong/></span>
                    
                    </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage