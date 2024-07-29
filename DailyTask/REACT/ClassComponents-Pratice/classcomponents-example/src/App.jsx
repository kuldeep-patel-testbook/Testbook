import { useState } from 'react'
import './App.css'
import Demo1 from './components/Demo'
import { Color } from './components/Color'
import { Fruits } from './components/Fruits'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Demo1/>
      <Color />
      <Fruits />
    </>
  )
}

export default App
