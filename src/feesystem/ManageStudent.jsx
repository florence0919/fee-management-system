
import { DollarSign, DollarSignIcon, Group, Pencil, SearchAlertIcon, SearchIcon, Trash, Users, UsersIcon, Wallet, Wallet2Icon } from 'lucide-react'

import Nav from '../Components/nav'
import Sidebar from '../Components/Sidebar'
import Card from '../Components/card'

import Formcomp from '../Components/Formcomp'

const cardData = [
  {
    title: "Total Student",
    number: 1000,
    icon: UsersIcon
  }, {
    title: "Total Due ",
    number: 100000,
    icon: Wallet2Icon
  }, {
    title: "Total Revenue",
    number: 500000,
    icon: DollarSignIcon
  }
]
const ManageStudent = () => {



  // const navigate=useNavigate();

  return (
    <div className='w-full h-screen '>

      <Nav />

      <div className='w-full h-[90%]  flex gap-4'>

        <div className='w-[20%] bg-gray-200 p-4'>
          <Sidebar />

        </div>


        <div className='w-[75%]   mt-2 ml-5  p-2'>
          <div className=' w-full h-[30%] flex justify-around items-center '>
            {cardData.map((obj) => (
              <Card title={obj.title} number={obj.number} icon={obj.icon} />
            ))}




          </div>
          <div className=' h-full w-full  mt-3 '>
<Formcomp/>

            {/* <div className='bg-gray-100 h-[10%] flex justify-between items-center px-1'>

              <p className='flex gap-x-2  border-1 border-b-amber-100 bg-white '>
                <input type='text' value={searchTerm} onChange={(e) => setSerachTerm(e.target.value)} placeholder='search..' className='bg-transparent  outline-0 border-0' />
                <p className=''> <SearchIcon size={18} /></p>
              </p>


           <Link to="/form">
              <button className='bg-blue-600 rounded-md h-7 ml-4 hover:scale-105
               hover:shadow-2xl text-white w-23 text-sm '> Add Student</button></Link>
            </div>
            {
              filteredData ? <div className='bg-gray-300 h-full w-full px-1'>
                <table className='bg-white h-fit w-full border text-sm '>
                  <thead className='p-2' >
                    <tr className='border border-r-0 bg-blue-100'>
                      <th className='border py-2 font-semibold'>SN</th>
                      <th className='border  font-semibold'>Name</th>
                      <th className='border font-semibold'>Class</th>
                      <th className='border font-semibold'> Email</th>
                      <th className='border font-semibold'> Phone</th>
                      <th className='border font-semibold'>Total Fee</th>
                      <th className='border font-semibold'> Paid Amount</th>
                      <th className='border font-semibold'> Due Amount</th>
                      <th className='border font-semibold'>Status</th>
                      <th className='font-semibold'>Actions</th>

                    </tr>
                  </thead>
                  <tbody>
                    {filteredData?.map((std, index) => (
                      <tr key={index} className='border-b-1' >
                        <td className='border'>{std.Sn} </td>
                        <td className='border'>{std.Name}</td>
                        <td className='border'> {std.Class}</td>
                        <td className='border'> {std.Email}</td>
                        <td className='border'> {std.Phone}</td>
                        <td className='border'> {std.TotalFee}</td>
                        <td className='border'> {std.PaidAmount}</td>
                        <td className='border'>{std.DueAmount}</td>
                        <td className='border'>{std.Status}</td>
                        <td className='flex gap-3'>
                          <p onClick={() => navigate("/form")}><Pencil size={16}/></p>
                          <p onClick={deleteData}><Trash  size={16}/></p>
                        </td>
                      </tr>
                    )
                    )}
                  </tbody>
                </table>
              </div> : <div> no data found</div>
            } */}

          </div>


        </div>


      </div>

    </div>
  )
}

export default ManageStudent
