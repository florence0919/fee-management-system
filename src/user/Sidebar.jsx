import { UserCircle } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-full h-full  bg-teal-400 '>
      <div className='h-[40%]   flex flex-col bg-red-300 items-center shadow-2xl shadow-teal-600'>
      
         <div className='h-[50%] w-full bg-pink-600 flex justify-center items-center'>
           <div className=' p-4 w-[50%] h-[70%]'>
      <UserCircle size={70}/> 
        </div>
         </div>
      
        <div className='h-[50%] w-full  text-white flex flex-col bg-teal-400  gap-2 p-4'>
          <p className='text-sm'>Name: Peach Cat</p>
          <p className='text-sm'>Email: peachreach</p>
          <p className='text-sm'>Class: 4</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
