import React from 'react'

function About() {
  return (
    <div className=' w-full min-h-screen p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className=' text-black font-sans  text-[6vw] md:leading-[4.5vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full  grid grid-cols-1 gap-5  lg:grid-cols-2   border-t-[1px] pt-10 mt-20 border-black'>
        <div className='md:w-1/2'>
       <h1 className='text-3xl md:text-5xl'> Our approach:</h1>
       <button className=' flex gap-3  items-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white  md:gap-10'>Read More
       <div className='w-5 h-5 bg-zinc-100  rounded-full '></div>
       </button>

        </div>
        <div className='h-[50vh] rounded-xl md:h-[70vh]'>
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='w-full h-full  md:h-[540px] rounded-xl'  />
        </div>
        </div>
       
    </div>
  )
}

export default About