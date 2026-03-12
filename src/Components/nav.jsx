import React from 'react'
import { useNavigate } from 'react-router-dom'


const Nav = () => {
  const navigate=useNavigate();
  return (
      <div className='bg-gray-200 h-[10%] flex justify-between items-center p-3'>
        <h1 className='text-blue-800 font-bold text-xl'> Fee Management </h1>
        <button onClick={()=>navigate("/")} className='bg-blue-800 h-7 text-white text-md px-4 rounded-md hover:scale-105 '> Log out</button>
      </div>
  )
}

export default Nav
