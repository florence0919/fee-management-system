import { X } from 'lucide-react';
import React, { useState } from 'react'

const FeeForm = ({setShow}) => {
    const[due,setDue]=useState("");
    const[submit,setSubmit]=useState("");
    const[errors,setErrors]=useState("");

      const handleSubmit=(e)=>{
        e.preventDefault();
        
    let error={};
    if(due<10000 && due>1000){
           alert("validation passed")
    }
    else{
      error.due="invalid amount"
    }
    setErrors(error);
      }
  return (
<div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='h-50 w-100 bg-gray-500 flex flex-col gap-3 text-center p-4'>
<div className='flex   justify-between'>
        <h1  className='text-2xl font-bold' >  Due Form</h1>
         <p  onClick={()=>setShow(false)} className='text-red-700 cursor-pointer'> <X/></p>
</div>
   <div className='flex'>  
     <label>Total amount: </label> <p>5000</p>
   </div>
   <div className='flex gap-2'>
   <label>Due amount: </label> 
   <input type="number" value={due} onChange={(e)=>setDue(e.target.value)} className='bg-white rounded-md'/>
   <p>{errors?errors.due:""}</p>
   </div>
   <div>
    <button type='submit' value={submit} onClick={(e)=>setSubmit(e.target.value)} className='bg-amber-200 rounded-xl w-30 hover:scale-3d'>Pay</button>
   </div>
    </form>
</div>
  )
}

export default FeeForm
