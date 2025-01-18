import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../constant/images'
import icons from '../constant/icons'

export default function Navbar() {
  return (
    <div className='flex justify-center items-center w-full max-w-[1200px] h-20 rounded-full shadow-sm shadow-black fixed top-20 bg-white transform -translate-x-1/2 -translate-y-1/2 left-1/2'>
      <div className='w-1/5 h-full flex justify-start items-center pl-10'>
        <img src={img.logo} alt="logo de devmastermind" className='w-12'/>
      </div>
      <div className='w-3/5 h-full flex justify-center items-center gap-4'>
        <NavLink className="w-1/5 flex justify-center items-center font-bold relative group" to="/services">
            <span>Nos services</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[75%]"></div>
        </NavLink>
        <NavLink className="w-1/5 flex justify-center items-center font-bold relative group">
            <span>Nos Offres</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[75%]"></div>
        </NavLink>
        <NavLink className="w-1/5 flex justify-center items-center font-bold relative group">
            <span>Nos réalisations</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></div>
        </NavLink>
        <NavLink className="w-1/5 flex justify-center items-center font-bold relative group">
            <span>Notre blog</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[75%]"></div>
        </NavLink>
        <NavLink className="w-1/5 flex justify-center items-center font-bold relative group">
            <span>A propos</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[65%]"></div>
        </NavLink>
      </div>
      <div className='w-1/5 h-full justify-end items-center flex pr-10'>
        <button className='flex justify-center items-center rounded-full font-bold text-white font-xl w-[90%] bg-primary h-12'>Nous contacter <icons.MdOutlineArrowRightAlt className='text-3xl top-1 relative flex' /></button>
      </div>
    </div>
  )
}
