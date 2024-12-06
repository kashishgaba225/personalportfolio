import React from 'react'
import { RiReactjsLine, RiNodejsLine, RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import {motion} from "framer-motion"



export default function Technologies() {

  const TechnologiesData = [
    { Logo: RiReactjsLine, talwindcss: 'text-7xl text-cyan-400', timeAnimation:2.5 },
    { Logo: RiNextjsLine, talwindcss: 'text-7xl text-white', timeAnimation:3 },
    { Logo: SiMongodb, talwindcss: 'text-7xl text-green-500' , timeAnimation:3.5 },
    { Logo: DiRedis, talwindcss: 'text-7xl text-red-700' , timeAnimation:4 },
    { Logo: RiNodejsLine, talwindcss: 'text-7xl text-green-00',timeAnimation:4.5 },

  ];

  const iconVariants=(duration)=>(
    {
      initial:{y:-10},
      animate:{
        y:[10,-10],
        transition:{
          duration:duration,
          ease:"linear",
          repeat:Infinity,
          repeatType:"reverse",
        },
      },
    }
  )
  return (
    <div className='pb-4'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
       className='my-20 text-center text-4xl'>Technologies</motion.h1>

      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className='flex flex-wrap items-center justify-center gap-4'>
        {TechnologiesData.map((value,index) => (
          <motion.div 
          key={index}
          variants={iconVariants(value.timeAnimation)}
          initial='initial'
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <value.Logo className={value.talwindcss} />
          </motion.div>
        ))}
      </motion.div>
    </div>

  )
}
