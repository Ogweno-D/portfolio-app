import React from 'react'
import BeatlesImg from '../assets/Beattles-Web.jpg'
import CheapSokoImg from '../assets/CheapSoko.png'
import ChefProImg from '../assets/ChefPro.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'> Work </p>
                <p className='py-6'> Check Out some of my recent work</p>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Card Item */}
                <div style={{backgroundImage:`url(${BeatlesImg})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div sm:pb-6'>
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Beattles Web Clone
                            </span>
                            <div className='pt-8  text-center'> 
                                <a href="https://beattles-web-clone.netlify.app/">
                                    <button className='mx-4 text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld' >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Ogweno-D/THE-BEATLES-WEB">
                                    <button className='mx- text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld'>
                                        Code
                                    </button>
                                </a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${CheapSokoImg})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                CheapSoko Web App
                            </span>
                            <div className='pt-8  text-center'>
                                <a href="/">
                                    <button className='mx-4 text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld' >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Ogweno-D/CheapSoko/tree/master/frontend">
                                    <button className='mx- text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld'>
                                        Code
                                    </button>
                                </a>
                            </div>
                    </div>


                </div>

                <div style={{backgroundImage:`url(${ChefProImg})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ChefPro Web App
                            </span>
                            <div className='pt-8  text-center'>
                                <a href="/">
                                    <button className='mx-4 text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld' >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/marshvin/chefpro/blob/main/front-end">
                                    <button className='mx- text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld'>
                                        Code
                                    </button>
                                </a>
                            </div>
                    </div>

                </div>

                <div style={{backgroundImage:`url(${ChefProImg})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ChefPro Web App
                            </span>
                            <div className='pt-8  text-center'>
                                <a href="/">
                                    <button className='mx-4 text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld' >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/marshvin/chefpro/blob/main/front-end">
                                    <button className='mx- text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld'>
                                        Code
                                    </button>
                                </a>
                            </div>
                    </div>

                </div>

                <div style={{backgroundImage:`url(${BeatlesImg})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div sm:pb-6'>
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Beattles Web Clone
                            </span>
                            <div className='pt-8  text-center'> 
                                <a href="https://beattles-web-clone.netlify.app/">
                                    <button className='mx-4 text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld' >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Ogweno-D/THE-BEATLES-WEB">
                                    <button className='mx- text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld'>
                                        Code
                                    </button>
                                </a>
                            </div>
                    </div>
                
                </div>

                <div style={{backgroundImage:`url(${CheapSokoImg})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                CheapSoko Web App
                            </span>
                            <div className='pt-8  text-center'>
                                <a href="/">
                                    <button className='mx-4 text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld' >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Ogweno-D/CheapSoko/tree/master/frontend">
                                    <button className='mx- text-center rounded-lg px-4 py-3  bg-white text-gray-700 font-bold text-ld'>
                                        Code
                                    </button>
                                </a>
                            </div>
                    </div>


                </div>

                

                

                

            
                


            </div>

        </div>

    </div>
  )
}

export default Work