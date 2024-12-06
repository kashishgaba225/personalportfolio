import React from 'react'
import { motion } from "framer-motion"


export default function Experience() {
    const EXPERIENCES = [

        {
            year: "September 2024 - Present",
            role: "MERN Stack Trainee",
            company: "Sqilco",
            description: `I joined the SQILCO MERN Stack training program, a comprehensive 4-month journey designed to build expertise in full-stack web development. This program provided me with in-depth knowledge and hands-on experience with MongoDB, Express.js, React, and Node.js. Upon completing the training, I transitioned into a Teaching Assistant role at SQILCO, where I further honed my programming skills by mentoring students, resolving complex coding challenges, and deepening my understanding of key technologies. This experience not only solidified my technical foundation but also enhanced my ability to collaborate and communicate effectively in a learning-focused environment.`,
            technologies: ["Javascript", "React.js", "Tailwindcss", "Node.js", "Express", "Mongoose", "Redis", "Cloudinary"],

        },
        {
            year: " July 2024 - August 2024",
            role: "Core Java",
            company: "Sqilco",
            description: `I joined SQILCO to complete a 2-month Core Java Developer program aimed at building a strong foundation in Java programming. During this program, I gained in-depth knowledge of core Java concepts, including object-oriented programming, exception handling, collections, and multithreading. This hands-on training enhanced my problem-solving abilities and prepared me to write efficient, maintainable, and scalable code. The experience equipped me with the essential skills to excel in Java development and laid a solid groundwork for my career in software development.`,
            technologies: ["Java", "Javafx"],
        },
    ]
    return (
        <div>
            <motion.h1 
             whileInView={{opacity:1, y:0}}
             initial={{opacity:0 ,y:-100}}
             transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Experience</motion.h1>

            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>

                        <motion.div 
                         whileInView={{ opacity: 1, x: 0 }}
                         initial={{ x: -100, opacity: 0 }}
                         transition={{ duration: 0.5 }}
                        className='w-full lg:w-1/4'>
                            <p
                                className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </motion.div>

                        <motion.div
                         whileInView={{opacity:1, x:0}}
                         initial={{x:100,opacity:0}}
                         transition={{duration:0.5}}
                        className='w-full max-w-xl lg:3/4'>
                            <h6 className='mb-2 font-semibold'>{experience.role}- <span className='text-sm text-purple-100'>{experience.company}</span></h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            <div className='flex flex-wrap '>
                                {experience.technologies.map((technology, index) => (
                                    <span className='mr-2 rounded border border-neutral-800 px-2 py-1 text-xs hover:bg-neutral-800 hover:text-pink-600 cursor-pointer mb-2' key={index}>{technology}</span>
                                ))}</div>
                        </motion.div>


                    </div>
                ))}
            </div>
        </div>
    )
}
