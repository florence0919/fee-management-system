import React from 'react'

const Student = () => {
  return (
    <div className='bg-green-300 h-screen w-screen'>
        <div className='h-[20%] w-full bg-indigo-100 text-center p-3 mt-3'>
            <p className='text-purple-600 text-2xl'>Student Profile</p>
            <p className='text-sm'>A responsive student profile page design</p>


        </div>
      <div className='w-full h-full bg-cyan-600 p-2 flex '>
          <div className='bg-pink-200 w-[30%] h-full p-3 flex justify-center'>
          

            <div className='bg-gray-50 h-[50%] w-[80%] p-4'>
                 <div className='bg-emerald-300 w-full h-[60%]'>
                    image
                 </div>
                 <div>
                    <p>Student ID:09199 </p>
                    <p>Class: 7</p>
                    <p>Section :A</p>
                 </div>

            </div>
        </div>
        <div className='bg-blue-300 w-[70%] h-full p-2 flex flex-col gap-5'>
          <div className='bg-white h-[40%] w-full p-2'> 
              <p>General Information</p>
            <table className='bg-rose-400 ' >
               <tbody>
                <tr>
                    <td></td>
                </tr>
               </tbody>

                
            </table>
          </div>


          <div className='bg-white w-full h-[30%] p-2 '>
            <p>Other Information</p>
            <p> this student this thus dusimab s bgs hgwb iam unable ti igo to cass sp iam doing this ta </p>
        
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Student
