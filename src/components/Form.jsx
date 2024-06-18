import React from 'react'

const Form = () => {
  return (
    <div className='w-full flex justify-center items-center p-4 '>

          <form  method='POST'  action="https://getform.io/f/f52a4964-b588-4931-98f3-0eb1f06e2a53" className='flex flex-col max-w-[600px]'>
            <div className='mb-4'>
                <div className='align-start mb-2 '>
                     
                    <p> Name </p>
                </div>

                <input  className=" w-full rounded-md leading-6 p-2" type="text" placeholder='Name' />
            </div>
            
        </form>


    </div>
  )
}

export default Form