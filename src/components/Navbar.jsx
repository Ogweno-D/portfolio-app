import React, {useState} from 'react'
import { FaBars,FaTimes, FaLinkedin, FaGithub} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"

const Navbar = () => {

  const[nav,setNav]= useState(false)
  const handleClick=() => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-500'>
      <div>

      </div>
    
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>  
        </ul>

      {/* Harmburger */}
      <div onClick ={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      {/* Mobile menu */}
      <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] justify-center items-center flex flex-col' }>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Contact</li>

        </ul>
        {/* Social Icons */}
        <div className='flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li>
              <a className='flex justify-between items-center w-full text-gray-400'
               href="/">
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            {/* <li>
              <a className='flex justify-between items-center w-full text-gray-400'
               href="/">
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li> */}
            <li>
              <a className='flex justify-between items-center w-full text-gray-400'
               href="/">
                LinkedIn <FaGithub size={30}/>
              </a>
            </li>
            <li>
              <a className='flex justify-between items-center w-full text-gray-400'
               href="/">
                LinkedIn <HiOutlineMail size={30}/>
              </a>
            </li>
            <li>
              <a className='flex justify-between items-center w-full text-gray-400'
               href="/">
                LinkedIn <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>

      {/* absolute top-0 left-0 w-full h-screen bg-[#0a192f] justify-center items-center flex flex-col */}

        </div>

    </div>

  
  )
}

export default Navbar
