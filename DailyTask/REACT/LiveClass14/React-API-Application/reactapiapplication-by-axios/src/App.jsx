import React from 'react'
// import Card from './components/Card'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Posts from './Pages/Posts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </div>
      </Router>
  )
  {/* <div className="cards">
        <Card />
      </div> */}
}

export default App