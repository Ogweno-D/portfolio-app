import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-[#0a192f]'>
        <form  method='POST'  action="https://getform.io/f/f52a4964-b588-4931-98f3-0eb1f06e2a53" className='flex flex-col max-w-[600px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline  border-b-4 border-pink-600 text-gray-300' > Contact</p>
                <p className='text-gray-300 py-4 pb-4'> Submit the form below or email me at - dennisogwene@gmail.com</p>

               
            </div>
            <input className='bg-[#ccdcf6] p-2'  type="text" name="Name" id=""placeholder='Name'  />
            <input className='my-4 p-2 bg-[#ccdcf6]'  type="email" name="Email" id=""placeholder='Email' />
            <textarea className='bg-[#ccdcf6] p-2' name="message" id="" cols="30" rows="10" placeholder='Write a message'></textarea>


            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 flex mx-auto items-center'  > Let's collaborate</button>

        </form>
        
   </div>
  )
}

export default Contact