import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="border-2 bg-yellow-300 text-red-600 border-green-400">
        Click on the Vite and React logos to learn more
      </p>
      
      <p className='lg:hidden mx-0 px-1 text-xs bg-red-900 sm:bg-yellow-500 text-sm md:bg-green-500 text-black lg:bg-pink-500 xl: bg-blue-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, libero eum? Natus ipsam harum dolores maiores sunt odit alias accusamus, beatae quis tenetur perspiciatis consequuntur corrupti blanditiis fugit neque laborum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, necessitatibus placeat aut cum dolor quae labore fuga consequuntur possimus est obcaecati molestiae velit nam perferendis ratione temporibus magni omnis nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi ducimus magni delectus eligendi. Quos iste blanditiis atque odit totam, rem quia nemo in explicabo, libero magnam harum inventore eius!
      </p>

      <p className='hidden lg:block mx-0 px-1 text-xs bg-red-900 sm:bg-yellow-500 text-sm md:bg-green-500 text-black lg:bg-pink-500 xl: bg-blue-300'>
        Hey You are on a Large Screen? Check this out!
      </p>

      <div className="m-36">
        <button className='text-sm px-4 py-2 bg-purple-800 text-white rounded-md sm:hover:bg-purple-600 lg:hover:bg-green-600 active:bg-pink-900 focus:outline-red-400'>Hover Me!</button>
      </div>
      


    </>
  )
}

export default App
