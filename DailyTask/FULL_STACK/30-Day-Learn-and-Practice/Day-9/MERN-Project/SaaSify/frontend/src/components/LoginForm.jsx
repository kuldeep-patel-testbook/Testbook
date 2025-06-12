import React, { useState }  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');

    } catch (error) {
      alert('Login Failed');
    }
  };

  return (
    <div className='p-8 max-w-md mx-auto'>
      <h2 className='text-xl font-bold mb-4'>LoginForm</h2>
      <input className='w-full p-2 border mb-3 hover:outline-green-500' type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}  />
      <input className='w-full p-2 border mb-3 hover:outline-green-500' type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}  />
      <button className='bg-green-500 text-white px-4 py-2 cursor-pointer hover:bg-green-700' type='submit' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginForm