import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthRoutes } from './Routes/AuthRoutes'
import { Dashboard } from './modules/dashboard/Dashboard'

const App = () => {
  return (
  <Router>
   <Routes>
   <Route path='/*' element={<AuthRoutes/>}></Route>
   <Route path='/dashboard/*' element={<Dashboard/>}></Route>
   </Routes>
  </Router>
  )
}

export default App
