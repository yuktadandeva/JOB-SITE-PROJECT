import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from './Routes/AuthRoutes'
import { Dashboard } from './modules/dashboard/Dashboard'
import { Header } from './shared/components/Header/Header'

const App = () => {
  return (
  <Router>
   <Routes>
   <Route path="/" element={<Navigate to="/dashboard" />} />
   <Route path='/*' element={<AuthRoutes/>}></Route>
   <Route path='/dashboard/*' element={<Dashboard/>}></Route>
   </Routes>
  </Router>
  )
}

export default App
