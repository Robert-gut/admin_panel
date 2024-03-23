import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import NotFound from './pages/Admin/notFound/notFound'

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/admin' element={<Admin />} />
            <Route path='/logIn' element={<Admin />} />
            //! log in
            <Route path='*' element={<NotFound />} />
            //! not found
         </Routes>
      </Router>
   )
}

export default App
