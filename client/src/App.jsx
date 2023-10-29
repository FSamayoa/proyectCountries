import { useState, useEffect } from 'react'
import Nav from './components/nav/Nav'
import Card from './components/card/Card'
import Landing from './components/landing/Landing'
import Cards from './components/cards/Cards'
import Details from './components/details/Details'
import Form from './components/form/Form'

import './App.css'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => { }, [])

  return (

    <div>
      <Nav />
      <Landing />
      <Card />
      <Cards/>
      <Details/>
      <Form/>
      <p>hello</p>
    </div>

  )
}

export default App
