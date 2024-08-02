import React from 'react';
import './App.css';
import Notifications from './components/Notifications';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { AuthProvider } from './components/AuthContext';
import Signup from './components/Signup';

function App() {
  return (

    <Router>
      <AuthProvider>
        <div className="App">

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
