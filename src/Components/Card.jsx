import { Users } from 'lucide-react';
import React from 'react'

const Card =({title,number, icon:Icon}) => {
  return (

       <div className='bg-blue-400 h-[75%] hover:scale-110 duration-500 hover:shadow-blue-950 shadow w-[20%] rounded-md text-white flex flex-col justify-around p-2'>
              <p className="  mt-2 "> <Icon size={24} /></p>
              <h1 className='mt-2  text-sm '> {title}</h1>
              <p className=''> {number}</p>
            </div>

  )
}

export default Card;
