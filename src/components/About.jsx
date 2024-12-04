import React from 'react'
import Picture from '../assests/Imagee.jpeg'

export default function About() {
  return (
    <div>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>

        <div className='flex flex-wrap'>

            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-md h-[400px] w-[400px]' src={Picture} alt="Picture" />
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
                <div className='  flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6 pt-20'>I am dedicated and MERN Stack developer with a passion for creating
                         efficient and user-friendly web applications.With 9 month of training and 6 month of internship 
                         experience,I have worked with a variety of technologies , including React, Next.js, Node.js,
                          MySQL, PostgreSQL and MongoDB. My journey in web development began with a deep curiosity for how things work,
                          and it has evolved into a carrer where I continously strive to learn and adapt to new challenges. I thrive 
                          in collabrative enviornments and enjoy solving complex problems to deliver high-quality solutions.
                          Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects. </p>
                </div>
            </div>
        </div>
    </div>
  )
}