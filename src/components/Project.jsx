import React from 'react'
import project1 from '../assests/Blogger.jpeg'
import project2 from '../assests/Screenshot.png'
import project3 from '../assests/Shopping.jpeg'
import {motion} from "framer-motion"

export default function Project() {

  const PROJECTS = [
    {
      title:"Blogger",
      image:project1,
      description:
      "MERN Developer, Tech Stack: ReactJs, Express, JavaScript, NodeJs, MongoDB. Create Blogger library website. Where Users give review on Blogger. Here use JWT authentication for protected APIs. Like library-Blogger, etc.",
      technologies: ["React", "Talwind", "Express" ,"JavaScript", "Node.js", "MongoDB"],
    },
    {
      title: "Shopping Cart",
      image: project3,
      description:
      "Mern Developer, Tech Stack: JavaScript, Node, MongoDB and React. Created an Shopping card website backend part with multiple APIs based on products, users, carts and order. Here use JWT authentication for protected APIs and also use AWS. Like Amazon and Flipkart etc. ",
      technologies:["React", "Tailwind","Express","JavaScript","NodeJs", "MongoDB"],
    },
    {
      title:"Portfolio Website",
      image:project2,
      description:
      "A personal portfolio website showcasing projects,skills, and contact information.",
      technologies:["HTML","CSS","React","Tailwind"],
    }
  ]

  return (
    <div>
      <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0 ,y:-100}}
       transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Projects</motion.h1>

      <div>
        {PROJECTS.map((project,index)=>(
          <div className='mb-8 mt-[50px] ring hover:ring-pink-600 px-2 rounded-md py-2 flex flex-wrap lg:justify-center' key={index}>

            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ x: -100, opacity: 0 }}
             transition={{ duration: 0.5 }}
             className='w-full lg:w-1/4 '>
            <img className='md:w-[220px] md:h-[200px]' src={project.image} alt={project.title} />
            </motion.div>

            <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ x: 100, opacity: 0 }}
             transition={{ duration: 0.5 }}
            className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold flex justify-center py-2'>{project.title}</h6>
            <p className='mb-4 text-neutral-400 '>{project.description}</p>
            <div className='flex flex-wrap justify-center items-center'>
            {project.technologies.map((technology,index)=>(
              <span className='mr-2 rounded border border-neutral-800 px-2 py-2 text-xs hover:bg-neutral-800 hover:text-pink-600 mb-2' key={index}>{technology}</span>
            ))}</div>
            </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}
