import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-[#0a192f]'>
        <form  method='POST'  action="https://getform.io/f/f52a4964-b588-4931-98f3-0eb1f06e2a53" className='flex flex-col max-w-[600px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline  border-b-4 border-pink-600 text-gray-300' > Contact</p>
                <p className='text-gray-300 py-4 pb-4'> Submit the form below or email me at - dennisogwene@gmail.com</p>

               
            </div>
            <input className=' rounded-md leading-6 focus-visible:outline-none bg-[#ccdcf6] p-2'  type="text" name="Name" id=""placeholder='Name'  />
            <input className='rounded-md my-4 p-2 focus-visible:outline-none bg-[#ccdcf6]'  type="email" name="Email" id=""placeholder='Email' />
            <textarea className=' mt-3 rounded-xl bg-[#ccdcf6] p-2 focus-visible:outline-none ' name="message" id="" cols="30" rows="5" placeholder='Write a message'></textarea>


            <button className='text-white border-2  rounded-md  hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 flex mx-auto items-center'  > Let's collaborate</button>

        </form>
        
   </div>
  )
}

export default Contact