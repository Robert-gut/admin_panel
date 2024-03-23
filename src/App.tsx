import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import { Login } from './pages/Login/Login'

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/admin' element={<Admin />} />
            <Route path='/logIn' element={<Login />} />//! log in
            <Route path='*' element={<Admin />} />//! not found
         </Routes>
      </Router>
   )
}
``
export default App

