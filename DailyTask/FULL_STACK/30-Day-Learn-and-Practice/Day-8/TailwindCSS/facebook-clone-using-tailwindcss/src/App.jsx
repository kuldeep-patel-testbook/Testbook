import React from 'react'
import fbLogo from '/fb.svg'

const App = () => {
  return (
    <div>
      <div className="container mt-48 flex mx-auto items-center justify-center">
        <div className="left w-150 mx-14">
          <img className='w-60' src={fbLogo} alt=""  />
          <p className='text-3xl'>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className="right flex flex-col bg-white p-8 rounded-xl w-1/4 text-lg relative">
          <input className='px-4 h-12 my-2 border-1 border-gray-200 rounded-lg outline-blue-300' type="text" placeholder='Email address or phone number'/>
          <input className='px-4 h-12 my-2 border-1 border-gray-200 rounded-lg outline-blue-300' type="password" placeholder='Password' />
          <button className='btn bg-blue-600 hover:bg-blue-700 text-white my-2 py-2 rounded-md font-bold'>Log In</button>
          <span className='text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline'>Forgotten password?</span>
          <hr className='my-2 text-gray-300' />
          <button className='btn bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit'>Create New Account</button>
          <span className="sp absolute -bottom-12 text-sm"> <span className="font-bold hover:underline">Create a Page </span>for a celebrity, brand or business.</span>
        </div>
      </div>
    </div>
  )
}

export default App