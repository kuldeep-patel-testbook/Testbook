import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import PatientNotes from './pages/PatientNotes';
import Navbar from './components/Navbar';
import './App.css';
import Appointments from './pages/Appointments';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      {token && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard token={token} />} />
        <Route path="/patients/:patientId/notes" element={<PatientNotes token={token} />} />
        <Route path='/appointments' element={<Appointments token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
