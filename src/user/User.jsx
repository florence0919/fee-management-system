import React from 'react'
import Navbar from './navbar'
import Sidebar from './Sidebar'
import Data from './Data'

const User = () => {
  return (
    <div className='bg-blue-50 w-screen h-screen  '>
      <div className=' bg-purple-300 h-[10%] w-full '>
        <Navbar/>
      </div>
 <div className='flex h-full w-screen bg-amber-300'>
    <div className='w-[20%] bg-green-300 '>
        <Sidebar/>
        </div>
    <div className='w-[80%] bg-pink-200 rounded-md '>
        <Data/>
        </div>
 </div>

    </div>
  )
}

export default User
