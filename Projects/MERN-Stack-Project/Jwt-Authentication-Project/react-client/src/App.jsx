import React, { useState } from 'react'
import Register from './components/register'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './components/login'
import { useEffect } from 'react'
import axios from 'axios'
import Protected from './components/Protected'
const API_BASE_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      axios
        .get(`${API_BASE_URL}/protected`, {headers: {Authorization: token}})
        .then((res) => setUser(res.data.user))
        .catch(() => setUser(null));
    }
  }, []);
  return (
    <div className='main'>
      <Router>
        <Routes>      
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/protected' element={user ? <Protected user={user} /> : <Navigate to="/login" /> } />
          <Route path='/' element={<h2>Welcome! <a href="/register">Register</a> or <a href="/login">Login</a></h2>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App