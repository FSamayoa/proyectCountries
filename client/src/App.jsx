import { useState, useEffect } from 'react'
import Nav from './components/nav/Nav'
import Landing from './components/landing/Landing'
import Cards from './components/cards/Cards'
import Details from './components/details/Details'
import Form from './components/form/Form'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import './App.css'


function App() {
  const [count, setCount] = useState([])

  useEffect(() => { }, [])

  
      const location = useLocation();
      const isLanding = location.pathname === '/';
  
  return (


    <div>
      
      {!isLanding && <Nav />}
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/*' element={<Nav />} />
        <Route path='/home' element={<Cards />} />
        <Route path='/details' element={<Details />} />
        <Route path='/form' element={<Form />} />
        
      </Routes>
    </div >

  )
}

export default App
