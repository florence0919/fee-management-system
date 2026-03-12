import React, { useState } from 'react'

const FeeForm = () => {
    const[due,setDue]=useState("");
  return (
    <div className='h-50 w-100 bg-gray-500 flex flex-col gap-3 text-center p-4'>
      <h1  className='text-2xl'>  Due Form</h1>
   <div className='flex'>  
     <label>Total amount: </label> <p>5000</p>
   </div>
   <div className='flex gap-2'>
   <label>Due amount: </label> <input type="number" value={due} onClick={(e)=>setDue(e.target.value)} className='bg-white rounded-md'/>
   </div>
   <div>
    <button className='bg-amber-200 rounded-xl w-30 hover:scale-3d'>Pay</button>
   </div>
    </div>
  )
}

export default FeeForm
