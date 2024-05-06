import React from 'react'

function Cards() {
  return (
    <div   className='w-full min-h-screen bg-[#18181B] grid grid-cols-1   items-center px-5 gap-5  mt-[30px] '>
        <div className="cardcontiner   h-[50vh] m-2">
          <div className="card relative rounded-xl w-full  h-full bg-[#004D43]">
            <img className='  w-32 mx-auto pt-[140px] ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className=' absolute left-10  bottom-10 px-5 py-1 border-2 rounded-lg'>&copy;2019-2020</button>
          </div>
        </div>
       <div className=' grid grid-cols-1 gap-5 md:grid-cols-2'>
       <div className="cardcontiner   h-[50vh] ">
        <div className=" relative card  rounded-xl  h-full bg-[#212121]">
        <img className=' relative  w-32 mx-auto pt-[140px] ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className=' text-white absolute left-10  bottom-10 px-5 py-1 border-2 rounded-lg'>&copy;2019-2020</button>
        </div>
        
        </div>
        <div className="cardcontiner   h-[50vh] ">
        <div className=" relative card  rounded-xl  h-full bg-[#212121]">
        <img className=' relative  w-32 mx-auto pt-[140px] ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className=' text-white absolute left-10  bottom-10 px-5 py-1 border-2 rounded-lg'>&copy;2019-2020</button>
        </div>
        
        </div>
       </div>
    </div>
  )
}

export default Cards