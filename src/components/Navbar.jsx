import React, {useState} from 'react'
import { FaBars,FaTimes, FaLinkedin, FaGithub} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"
import {Link } from "react-scroll"

const Navbar = () => {

  const[nav,setNav]= useState(false)
  const handleClick=() => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-500'>
      <div>

      </div>
    
        <ul className='hidden md:flex'>

          <li>
            <Link to='home' smooth ='true'  duration={500}>
            Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth ='true'  duration={500}>
            About
            </Link>
            </li>
          <li>
            <Link to='skills' smooth ='true'  duration={500}>
            Skills
            </Link>
            </li>
          <li>
            <Link to='work' smooth ='true'  duration={500}>
            Project
            </Link>
            </li>
          <li>
            <Link to='contact' smooth ='true'  duration={500}>
            Contact
            </Link>
            </li>  
        </ul>

      {/* Harmburger */}
      <div onClick ={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      {/* Mobile menu */}
      <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] justify-center items-center flex flex-col' }>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to='home' smooth ='true'  duration={500}>
            Home
          </Link>
          </li>

          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth ='true'  duration={500}>
            About
            </Link>   
            </li>

          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth ='true'  duration={500}>
            Skills
           </Link>
          </li>

          <li className='py-6 text-4xl'>
          <Link  onclick={handleClick}  to='work' smooth ='true'  duration={500}>
            Project
           </Link>
            </li>

          <li className='py-6 text-4xl'>
             <Link onclick={handleClick}  to='contact' smooth ='true' duration={500}>
            Contact
            </Link>
            </li>

        </ul>
        {/* Social Icons */}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="/">
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="/">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="/">
                Gmail <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="/">
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>

      {/* absolute top-0 left-0 w-full h-screen bg-[#0a192f] justify-center items-center flex flex-col */}

        </div>

    </div>

  
  )
}

export default Navbar
