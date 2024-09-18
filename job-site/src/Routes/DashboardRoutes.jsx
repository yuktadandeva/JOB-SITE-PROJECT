import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../modules/dashboard/Dashboard'
export const DashboardRoutes = () => {
  return (
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
  )
}
