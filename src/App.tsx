import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import { Login } from './pages/Login/Login'
import { ResetPassword } from './pages/Reset-password/Reset-password'
import NotFound from './pages/notFound/notFound'
import Footer from './components/Footer/Footer'

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/admin' element={<Admin />} />
            <Route path='/' element={<Login />} />//! log in
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='*' element={<NotFound />} />//! not found
         </Routes>
         <Footer/>
      </Router>
   )
}

export default App
