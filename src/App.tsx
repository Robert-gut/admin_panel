import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './layouts/Admin/Admin'
import { Login } from './pages/Login/Login'
import { ResetPassword } from './pages/Reset-password/Reset-password'
import NotFound from './pages/notFound/notFound'

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/admin' element={<Admin />}>

            </Route>
            <Route path='/' element={<Login />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='*' element={<NotFound />} />//! not found
         </Routes>
      </Router>
   )
}

export default App
