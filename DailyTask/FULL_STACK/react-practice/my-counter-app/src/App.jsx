import React from 'react'
import Counter from './components/Counter'

const App = () => {
  //const [ count, setCount ] = useState(0);
  return (
    <>
      <Counter />
      
      {/* <div>
        <button onClick={() => setCount(count - 1)}><img src={viteLogo} className="logo" alt="Vite logo" title='Decrement' /></button>
        <button onClick={() => setCount(count + 1)}><img src={reactLogo} className="logo react" alt="React logo" title='Increment' /></button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Count is: {count}</h2>
      </div> */}
    </>
    
  )
}

export default App