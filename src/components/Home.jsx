import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]' >
    
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

      <p className='text-pink-600'> Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Dennis Ogweno</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
      <p className='text-[#8892b0] py-4 max-w'> I am  a full stack developer specializing in building exceptional digital experiences. 
        Currently. I'm focused with building responsive full stack applications.
        I build applications for both web and android platforms.
        </p>

        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           <span className='group-hover:rotate-90 duration-300'>
           <HiArrowNarrowRight className='ml'/>
           </span>
           View Work
          </button>
        </div>
    </div>

    </div>
  )
}

export default Home