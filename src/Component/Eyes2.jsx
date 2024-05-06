import React, { useEffect, useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Eyes2() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div data-scroll data-scroll-speed='-.2' className='w-full h-screen bg-[#CDEA68] relative mt-[30px]'>
            <div className='flex justify-center'>
                <h1 className='text-[2.5rem] md:text-[7rem] text-center pt-[90px] text-black font-bold'>READY <br />TO START <br />THE PROJECT?</h1>
            </div>
            <div className='relative mt-[60px] md:-mt-[320px]'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex items-center justify-center w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'>
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'>
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className='absolute bottom-[30px] ml-[20%] md:ml-[30%] lg:ml-[40%] text-black flex items-center gap-1 text-xl border-2 border-zinc-600 rounded-xl p-4'>Start Your Project<span className='rotate-45'><FaArrowUpLong /></span></button>
        </div>
    );
}

export default Eyes2;
