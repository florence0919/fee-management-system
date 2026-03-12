

import Nav from '../Components/nav';
import Sidebar from '../Components/Sidebar';
import { Cuboid, Pencil, SearchIcon, Trash } from 'lucide-react';

import Formcomp from '../Components/Formcomp';

const Dashboard = () => {
 


  return (
    <div className="bg-gray-200 h-screen w-full">
      <Nav />


      <div className=' bg-white w-full h-[90%] flex gap-4 '>

        <div className='bg-gray-200 w-[20%] h-full p-4'>

          <Sidebar />
        </div>
<Formcomp/>
        {/* <div className='w-[75%] bg-gray-300 mt-5 ml-5  p-4'>
          <div className=' h-[10%]  flex justify-between  items-center p-1'>
            <p className='flex border-1 gap-x-2 bg-white'>
              <input type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSerachTerm(e.target.value)}

                className='bg-transparent text-black text-sm ml-4 h-7 outline-0 border-0 ' />
              <p className='mt-[6px] mr-2'><SearchIcon size={18}  /></p>
            </p>
            <button className='bg-blue-600 hover:scale-105 hover:shadow-amber-800 rounded-md h- mr-4 text-white'> Add Student</button>
          </div>
          {filteredData ?
            <div className=' h-full'>
              <table className='bg-white  h-fit  w-full border'>
                <thead className='border p-2'>
                  <tr className='bg-blue-100 text-sm   p-2'>
                    <th className='border py-2 font-semibold'>
                      Sn
                    </th>
                    <th className='border  py-2 font-semibold'>
                      Name
                    </th>
                    <th className='border  py-2 font-semibold'>
                      Email
                    </th>
                    <th className='border  py-2 font-semibold'>
                      Class
                    </th>
                    <th className=' py-2 font-semibold'>Phone</th>
                    <th className='border  py-2 font-semibold '>Total fee</th>
                    <th className='border  py-2 font-semibold'>Due Amount</th>
                    <th className='border  py-2 font-semibold'>Paid Amount</th>
                    <th className='border  py-2 font-semibold'>Status</th>
                    <th className=' py-2 font-semibold'>Action</th>

                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((student, index) => (
                    <tr key={index} className=' border-b-1'>
                      <td className='border'>{student.Sn}</td>
                      <td className='border'>{student.Name}</td>
                      <td className='border'> {student.Class}</td>
                      <td className='border'> {student.Email}</td>
                      <td className='border'> {student.Phone}</td>
                      <td className='border'> {student.TotalFee}</td>
                      <td className='border'> {student.PaidAmount}</td>
                      <td className='border'>{student.DueAmount}</td>
                      <td className='border'>{student.Status}</td>
                      <td className='flex gap-3'>
                        <p onClick={() =>navigate("/")}><Pencil size={16} /></p>
                        <p onClick={deleteData}><Trash size={16} /> </p>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>
            </div> : <div>no data found</div>

          }

        </div> */}

      </div>


    </div>
  )
}

export default Dashboard;
