import React from 'react'
import { RiReactjsLine, RiNodejsLine, RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";



export default function Technologies() {

  const TechnologiesData = [
    { Logo: RiReactjsLine, talwindcss: 'text-7xl text-cyan-400' },
    { Logo: RiNextjsLine, talwindcss: 'text-7xl text-white' },
    { Logo: SiMongodb, talwindcss: 'text-7xl text-green-500' },
    { Logo: DiRedis, talwindcss: 'text-7xl text-red-700' },
    { Logo: RiNodejsLine, talwindcss: 'text-7xl text-green-00' }

  ]
  return (
    <div className='pb-4'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        {TechnologiesData.map((value,index) => (
          <div className='rounded-2xl border-4 border-neutral-800 p-4' key={index}>
            <value.Logo className={value.talwindcss} />
          </div>
        ))}
      </div>
    </div>

  )
}
