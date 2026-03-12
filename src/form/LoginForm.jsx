import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate= useNavigate();

  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [errors, SetErrors] = useState("");
  const[incorrect,setIncorrect]=useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    let error = {};

    if (!username.trim()) {
      error.username = "username required";
    }
    if (!password.trim()) {
      error.password = "password required";
    }
    SetErrors(error);
    if (Object.keys(error).length === 0) {
       if(username==="admin" && password==="12345"){
        navigate("/dash");
         
       }else if(username==="student" && password==="student123"){
        navigate("/user");
       }
       else{
        setIncorrect("please type correct details");

       }
    }






  }
  return (
    <div className='w-screen h-screen flex justify-center' >
      <form  onSubmit={handleSumbit} className='bg-fuchsia-800 h-[60%] w-[35%] rounded-sm  mt-4 rounded-md flex flex-col items-center'>
        <h1 className='text-2xl text-center p-4 font-serif text-gray-100'> Login </h1>
        {incorrect &&(
          <p>{incorrect}</p>
        )}
        <div className=' w-[90%] h-[70%]  flex flex-col gap-y-10 mt-6'>
          <div className='flex justify-center gap-x-5 '>

            <label className='font-mono text-gray-100'>Username:</label>
           <div className='flex flex-col'>
             <input type="text" value={username} onChange={(e) => SetUsername(e.target.value)} className='bg-white rounded-sm border-blue-900' />
            <p className='text-red-400'>{errors ? errors.username : " "}</p>
           </div>
            </div>


          <div className='flex justify-center gap-x-5'>
            <label className='font-mono text-gray-100'>Password:</label>
        <div className=''> 
              <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} className='bg-white rounded-sm' />
            <p className='text-red-400'>{errors?errors.password:" "}</p>
        </div>
            </div>


          <div className=' flex justify-center gap-x-4'>
           
            <input type="submit" value="login" className=' w-30 text-purple-600 bg-fuchsia-300 rounded-md font-mono h-8' />
            <button onClick={()=>alert("bye")} className=' w-30 text-fuchsia-950 bg-red-300 rounded-md font-mono'>Cancel</button>
          </div>
        </div>

      </form>


    </div>
  )
}

export default LoginForm
