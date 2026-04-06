import { useState } from 'react'
import './App.css'
import TipCalculator from './Components/TipCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TipCalculator
    restaurantName = {"Hibachi"}
    />

    
    </> //closing tag
  )
}

export default App
