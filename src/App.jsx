

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import ManageStudent from './feesystem/ManageStudent'
import StudentForm from './form/StudentForm'
import Dashboard from './feesystem/Dahboard'
import LoginForm from './form/LoginForm'
import User from './user/User'
import FeeForm from './form/FeeForm'
import Student from './user/Student'


function App() {


  return (
    <>
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/student'   element={<Dashboard/>}       />
           <Route path='/dash' element={<ManageStudent/>}  />
           {/* register */}
           <Route path='/form' element={<StudentForm/>} />
           {/* edit data */}
              <Route path='/form/:id' element={<StudentForm/>} />
           < Route path='/' element={ <LoginForm/>} />
           <Route path='/user' element={<User/>} />
           <Route path='/fee' element={<FeeForm/>}/>
           <Route path='/std' element={<Student/>}/>

      
      </Routes>
      </BrowserRouter>




     


    
     
    </div>
    
      
    </>
  )
}

export default App
