import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
      const response = await axios.get('http://localhost:3700/api/users');
      setUsers(response.data);
  };

  
  useEffect(() => {
      fetchUsers();
  }, []);

  return (
      <div>
          <h1>User Management</h1>
          <UserForm fetchUsers={fetchUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>
  );
};

export default App;
