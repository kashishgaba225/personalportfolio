import React from 'react'
import ProfileImg from '../assests/Image.jpeg'
import {motion} from 'framer-motion'

export default function Hero() {

  const container=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5,delay: delay}
    }
  })
  return (
    <div className='pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>

        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>

            <motion.h1
            variants={container(0)}
            initial='hidden'
            animate='visible'
             className='pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16'>Kashish</motion.h1>
            <motion.span
            variants={container(0.5)}
            initial='hidden'
            animate='visible'
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-transparent text-4xl tracking-tight'>Mern Stack Developer</motion.span>
            <motion.p 
            variants={container(1)}
            initial='hidden'
            animate='visible'
            className='my-2 mx-w-xl py-6 font-light tracking-tight'>Trained in Mern Stack Development using React, Nodejs with Express and MongoDB. Proficient in JavaScript. Hands-on in ES6.Understand caching fundamentals and hands-on with Redis. Hands-on experience with Cloudinary file upload and read Experienced in Agile. Methodology: Daily scrum,Sprint planning. Sprint review. Participated in Function Coding competitions on HackerRank and LeetCode.  </motion.p>
            </div>

        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
          <motion.img 
          initial={{x:100, opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1,delay:1.2}}
          className='rounded-md md:h-[400px] md:w-[360px] h-[350px] w-[360px]' src={ProfileImg} alt="ProfileImg" />

        </div>
        </div>


      </div>
    </div>
  )
}
