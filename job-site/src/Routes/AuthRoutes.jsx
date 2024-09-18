import {Routes, Route } from 'react-router-dom'
import { Login } from '../modules/auth/Login/Login'
import { Registration } from '../modules/auth/Registration/Registration'


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
    </Routes>
  )
}

