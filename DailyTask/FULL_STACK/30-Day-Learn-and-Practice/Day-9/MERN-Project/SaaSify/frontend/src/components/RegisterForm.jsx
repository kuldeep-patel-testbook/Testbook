import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password
      });
      alert('Registration Successful');
      navigate('/login');

    } catch (error) {
      alert('Registration Failed', error.message);
    }
  };

  return (
    <div className='p-8 max-w-md mx-auto'>
      <h2 className='text-xl font-bold mb-4'>Register</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='w-full p-2 border mb-3 hover:outline-blue-500'/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='w-full p-2 border mb-3 hover:outline-blue-500' />
      <button type='submit' onClick={handleRegister} className='bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-700'>Register</button>
    </div>
  )
}

export default RegisterForm