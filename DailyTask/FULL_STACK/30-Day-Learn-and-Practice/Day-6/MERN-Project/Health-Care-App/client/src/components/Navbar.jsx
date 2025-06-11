import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
      <Link to="/dashboard" style={{ marginRight: '10px' }}>Patients</Link>
      <Link to="/appointments" style={{ marginRight: '10px' }}>Appointments</Link>
      <Link to="/notes" style={{ marginRight: '10px' }}>Notes</Link>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
