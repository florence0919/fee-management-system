import { CrossIcon } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { detail } from  '../feesystem/detail';
const StudentForm = () => {
    const {id}=useParams();
 
    const student=detail.find((e)=>e.Sn==id);
    console.log(student);
    const nav=useNavigate();
    const[name,setName]=useState(student?student.Name:"");
    const[clas,setClas]=useState(student?student.Class:"");
    const[email,setEmail]=useState(student?student.Email:"");
    const[phone,setPhone]=useState(student?student.Phone:"");
    const[totalFee,setTotalFee]=useState(student?student.TotalFee:"");
    const[paidAmt,setPaidAmt]=useState(student?student.PaidAmount:"");
    const[due,setDue]=useState(student?student.DueAmount:"");
    const[status,setStatus]=useState(student?student.Status:"");
    const[errors,setErrors]=useState("");
    
    const handleSumbit=(e)=>{
       e.preventDefault();
    
    let error={};

    if(!name.trim()){
        error.name=" name required";
    }
    if(!clas.trim()){
       error.clas="required";
    }
    if(!email.trim()){
        error.email="email required";
    }
    if(!phone.trim()){
        error.phone="required";
    }
     if(totalFee.length<3){
        error.totalFee="required";
    }
     if(paidAmt.length<2){
        error.paidAmt="required";
    }
     if(due.length<2){
        error.due="required";
    }
     if(!status.trim()){
        error.status="required";
    }
      setErrors(error);
      console.log(errors);
      if(Object.keys(error).length===0){
        alert("validation passed");

    // call the api 
     if(id){
            nav("/dash")
     }
    setName("");
    setEmail("");
    setClas("");
    setEmail("");
    setPaidAmt("");
    setPhone("");
    setStatus("");
    setTotalFee("")

      }

    }


    return (
        <div className='bg-violet-400 w-screen min-h-screen flex justify-center'>


            <div className='bg-white h-[98%] w-[35%] pb-5   mt-4 rounded-md'>
            <h1 className= { ` font-semibold p-2 flex justify-center text-blue-800  ${student?"text-sm"  :"text-2xl"   }                           `   }    >{student?"UPDATE STUDENT":"REGISTRATION FORM"}</h1>
                <div>   </div>
                <div className=' px-8 h-[78%] flex flex-col gap-y-1 ml-5 text-sm  font-sans mt-2'>
                    <div className=' flex flex-col'>
                       <label>Name :</label> 
                       <input type='text'  value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter your name ' className='border border-gray-500  py-1 rounded-md' />
                       <p className='text-red-400'>{errors?errors.name:" "}</p>
                    </div>
                    <div className='flex flex-col'> <label>Class:</label> <input type='text' value={clas} onChange={(e)=>setClas(e.target.value)} placeholder='enter your class ' className='border border-gray-500   rounded-md' />
                        <p className='text-red-400'>{errors?errors.clas:""}</p>       
                    </div>
                    <div className='flex flex-col'> 
                     <label>Email:</label>
                      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email ' className='border border-gray-500     rounded-md' />
                      <p className='text-red-400' >{errors?errors.email:""}</p>
                      </div>
                   
                     <div className='flex flex-col'> 
                         <label>Phone :</label>
                      <input  type='number' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='enter your phone number ' className='border border-gray-500   rounded-md' />
                         <p className='text-red-400'>{errors?errors.phone:""}</p>
                     </div>
                      <div className='flex flex-col'> <label>Total Fee:</label> <input type='number' value={totalFee} onChange={(e)=>setTotalFee(e.target.value)} className='border    border-gray-500   rounded-md' />
                      <p className='text-red-400'>{errors?errors.totalFee:""}</p></div>
                   <div className='flex flex-col'> <label>Paid Amount:</label> <input type='number' value={paidAmt} onChange={(e)=>setPaidAmt(e.target.value)} className='border  border-gray-500    rounded-md' />
                   <p className='text-red-400'>{errors?errors.paidAmt:""}</p></div>
                    <div className='flex flex-col'><label>Due Amount:</label> <input type='number' value={due} onChange={(e)=>setDue(e.target.value)} className='border   border-gray-500   rounded-md' />
                    <p className='text-red-400'>{errors?errors.due:""}</p></div>
                  <div className='flex flex-col'>  <label>Status:</label> <input type='text' value={status} onChange={(e)=>setStatus(e.target.value)} className='border  border-gray-500   rounded-md' />
                  <p className='text-red-400'>{errors?errors.status:""}</p>
                </div>
                </div>
                <div className="flex justify-center px-5 ml-2 mt-3 gap-4" >
                    <button onClick={handleSumbit} className='bg-violet-400  text-white w-[40%] rounded-xl h-7'> Submit</button>
                    <button onClick={()=>nav("/dash")} className='bg-red-400 w-[40%] rounded-xl text-white'>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default StudentForm
