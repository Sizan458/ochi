import React, { useEffect, useState } from 'react';

function Eyes() {
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
    <div className='w-full h-screen overflow-hidden'>
      <div
        data-scroll
        data-scroll-speed='-.2'
        className='relative w-full h-full bg-cover bg-center'
        style={{
          backgroundImage: `url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")`,
        }}
      >
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex items-center justify-center w-[30vw] h-[30vw] rounded-full bg-zinc-100 md:w-[15vw] md:h-[15vw]'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
              >
                <div className='w-5 h-5 rounded-full bg-zinc-100 lg:w-10 lg:h-10'></div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center w-[30vw] h-[30vw] rounded-full bg-zinc-100   md:w-[15vw] md:h-[15vw]'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
              >
                <div className='w-5 h-5 rounded-full bg-zinc-100 lg:w-10 lg:h-10'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
