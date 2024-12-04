import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin,FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className=' flex flex-shrink-0 items-center'>
        <div className='logo text-3xl font-bold hover:scale-125 duration-300 hover:ring-2 px-2 ring-indigo-950 cursor-pointer '>k</div>
      </div>
      <div className='flex m-8 items-center justify-center gap-4 text-2xl'>
        <a className='hover:scale-125 duration-300 icon-gradient bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-500' href="https://www.instagram.com/kashish__522?igsh=MWZmcTNuY3A3cTh4OA=="><FaInstagram /></a>
        <a className='hover:scale-125  duration-300 text-blue-800' href="https://www.linkedin.com/in/kashish-gaba-a45a6431b"><FaLinkedin /></a>
        <a className='hover:scale-125  duration-300 bg-green-600 rounded-xl' href="https://wa.me/qr/YCLNQLLQTGQUP1"><FaWhatsapp /></a>
        <a className='hover:scale-125  duration-300' href="https://github.com/kashishgaba225/kashishgaba225"><FaGithub /></a>

      </div>
    </nav>
    
  )
}
