import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'


const Canvas = () => {
    const refs=useRef(null)
    const {scrollYProgress}=useScroll({target:refs})
    const img= useMemo(()=>{
     const loadedImg=[]
     for(let i=1;i<=240;i++){
        const imgs= new Image()
        imgs.src=`../../public/assets/${i}.jpg`
        loadedImg.push(imgs)
     }
     return loadedImg

    },[])
    const currentIndex=useTransform(scrollYProgress,[0,1],[1,240]);
    const render =useCallback((index)=>{
        if(img[index-1]){
            refs.current?.getContext('2d').drawImage(img[index-1],0,0)
        }
    },[img])
    useMotionValueEvent(currentIndex,'change',(latest)=>{
        render(Number(latest).toFixed())
       
    })
    useEffect(() => {
		render(1);
	}, [render]);
  return (
    <div className='w-full min-h-screen mt-[10px]'>
        <div className='h-[100px]'/>
       <div className='flex justify-center items-center'>
       <canvas className='w-[350px] h-[350px] bg-rose-100 top-0  md:w-[500px] md:h-[500px]  lg:w-[80%] lg:h-[60vh] lg:mx-auto' ref={refs}>

</canvas>
       </div>
    </div>
  )
}

export default Canvas
