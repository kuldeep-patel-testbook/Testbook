import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage'
import ListPage from './pages/ListPage';
import './styles.css';

const App = () => {

  return (
    <>
    <div className="main">
      <Router>
        <Routes>
          <Route path='/' element={<ListPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App