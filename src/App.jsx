import { useState } from 'react'
import Navbar from './component/Homepage/Navbar'
import './App.css'
import Hero from './component/Homepage/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
    </>
  )
}

export default App
