import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import img from '../constant/images'
import icons from '../constant/icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const handleShowMenu = () => {
    setOpen(!open)
  }

  return (
    <div className='w-full z-10 bg-transparent px-2 md:px-0 fixed top-12 md:top-20 max-w-[1200px] h-14 md:h-20 -translate-x-1/2 -translate-y-1/2 left-1/2'>
      <div className=' relative flex justify-between md:justify-center items-center w-full max-w-[1200px] h-14 md:h-20 rounded-full shadow-sm shadow-black bg-white transform '>
        <div className='w-1/5 h-full md:hidden flex justify-start items-center pl-5 cursor-pointer' onClick={handleShowMenu}  >
          <icons.IoMenu className='text-3xl'/>
        </div>
        <div className='w-1/5 h-full flex justify-start items-center pl-5 md:pl-10'>
          <img src={img.logo} alt="logo de devmastermind" className='w-8 md:w-12'/>
        </div>
        <div className=' hidden w-3/5 h-full md:flex justify-center items-center gap-4'>
          <NavLink className="w-1/5 flex justify-center items-center font-bold relative group" to="/services">
              <span>Nos services</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[75%]"></div>
          </NavLink>
          <NavLink to="/offres" className="w-1/5 flex justify-center items-center font-bold relative group">
              <span>Nos Offres</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[75%]"></div>
          </NavLink>
          <NavLink className="w-1/5 flex justify-center items-center font-bold relative group">
              <span>Nos réalisations</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></div>
          </NavLink>
          <NavLink to="/blog" className="w-1/5 flex justify-center items-center font-bold relative group">
              <span>Notre blog</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[75%]"></div>
          </NavLink>
          <NavLink className="w-1/5 flex justify-center items-center font-bold relative group">
              <span>A propos</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[65%]"></div>
          </NavLink>
        </div>
        <div className='w-[150px] md:w-1/5 h-full justify-end items-center flex pr-2 md:pr-10'>
          <button className='flex justify-center items-center rounded-full font-bold text-white text-[12px] md:text-xl w-[90%] bg-primary h-12'>Nous contacter <icons.MdOutlineArrowRightAlt className='text-3xl top-1 relative flex' /></button>
        </div>
        
      </div>
      <div className={'z-10 fixed w-[50%] h-screen flex flex-col items-center bg-white shadow-sm shadow-black -top-5 md:hidden duration-1000 ' + (open ? 'left-0' : '-left-full')}>
          <div className='absolute top-0 w-full h-10 justify-between flex items-center'>
            <div className='w-1/5 h-full flex justify-start items-center cursor-pointer' onClick={handleShowMenu}>
              <icons.IoCloseSharp className='text-3xl'/>
            </div>
            <NavLink className='w-1/5 h-full flex justify-start items-center pr-5'>
              <img src={img.logo} alt="logo de devmastermind" className='w-10'/>
            </NavLink>
          </div>
          <div className='w-full justify-start flex flex-col items-start top-20 relative px-2 gap-10 underline'>
            <NavLink className="text-lg font-bold flex items-center gap-2" to="/">
              <icons.GoHomeFill className='font-bold text-2xl' />
              Accueil
            </NavLink>
            <NavLink className="text-lg font-bold flex items-center gap-2" to="/">
              <icons.MdMiscellaneousServices  className='font-bold text-2xl' />
              Services
            </NavLink>
            <NavLink className="text-lg font-bold flex items-center gap-2" to="/">
              <icons.PiHandArrowUpBold className='font-bold text-2xl' />
              Offres
            </NavLink>
            <NavLink className="text-lg font-bold flex items-center gap-2" to="/">
              <icons.RiProjectorFill  className='font-bold text-2xl' />
              Réalisations
            </NavLink>
            <NavLink className="text-lg font-bold flex items-center gap-2" to="/">
              <icons.SiBlogger className='font-bold text-2xl' />
              Blog
            </NavLink>
            <NavLink className="text-lg font-bold flex items-center gap-2" to="/">
              <icons.FaMessage className='font-bold text-2xl' />
              A propos
            </NavLink>
          </div>
        </div>
    </div>
  )
}
