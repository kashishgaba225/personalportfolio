import React from 'react'
import Pictureimg from '../assests/Imagee.png'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <div>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>

        <div className='flex flex-wrap'>

            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center '>
                    <motion.img 
                    whileInView={{opacity:1,x:0}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:0.5}}
                    className='rounded-md md:h-[410px] md:w-[300px] h-[400px] w-[300px]' src={Pictureimg} alt="imgdata" />
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
                <div className='  flex justify-center lg:justify-start'>
                    <motion.p
                    whileInView={{opacity:1, x:0}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:0.5}}
                     className='my-2 max-w-xl py-6 pt-20'>I am a dedicated MERN Stack Developer with a passion for building efficient, scalable, and user-friendly web applications. With 1 year and 8 months of professional experience, I have worked with a wide range of technologies including React.js, Node.js, Express.js, MongoDB, MySQL, and PostgreSQL. My journey in web development started with a strong curiosity about how modern applications work, and it has grown into a career focused on continuous learning, innovation, and problem-solving. I enjoy working in collaborative environments where I can contribute to developing high-quality solutions and improving user experiences. Beyond coding, I enjoy exploring emerging technologies, enhancing my development skills, and staying updated with the latest trends in the tech industry. </motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}
