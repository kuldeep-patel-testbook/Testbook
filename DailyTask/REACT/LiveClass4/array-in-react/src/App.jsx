import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Array from './components/Array'
import ArrayInProps from './components/ArrayInProps'

function App() {
  const [count, setCount] = useState(0)
  let food = ['Pulses','Flour','Pizza','Burger','Biryani','Pasta', 'Pav Bhaji'];
  return (
    <>
      <Array />
      <ArrayInProps food={food} />
      
    </>
  )
}

export default App
