import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'

function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>

  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App