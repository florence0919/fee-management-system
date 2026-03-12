import React from 'react'
import { detail } from '../feesystem/detail'
import { useNavigate } from 'react-router-dom'

const Data = () => {
  const navigate=useNavigate();
  return (
    <div className='h-full w-full bg-gray-200  p-3'>
      <div className='h-[20%]  rounded-md  bg-blue-200'>
        <div className='p-2 font-medium ml-5'><p>Overall Summary</p></div>
        <div className='h-[80%] flex gap-20  justify-around' >
          <div>
           <p>Total Due</p>
           <p>85000</p>
          </div>
          <div>
            Total Paid
            <p>220000</p>
          </div>
          <div>
            Next Due Date
            <p> march 6,2026</p>
          </div>
          <div>
         <button onClick={()=>navigate("/fee")} className='bg-blue-800 rounded-2xl w-30 h-10  text-white'> Pay Total Due</button>
          </div>

        </div>

      </div>
      <div className='bg-blue-200 h-full w-full mt-5 '>
 
 <table className='bg-white w-full h-fit '>
  <thead>
    <tr className='border bg-blue-400 '>
      <th className='border'>Total Fee</th>
      <th className='border'>Paid Fee</th>
      <th className='border'>Due</th>
      <th className='border'>Status</th>
    </tr>

  </thead>
  <tbody className='bg-gray-100 '>
    {detail.map((st)=>(
      <tr>
    <td className='border'>{st.TotalFee}</td>
       <td className='border'>{st.PaidAmount}</td>
          <td className='border'>{st.DueAmount}</td>
             <td className='border'>{st.Status}</td>
      </tr>

    )

    )}
   
  </tbody>

 </table>
      </div>
    </div>
  )
}

export default Data
