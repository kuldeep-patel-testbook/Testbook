import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5100/api/users/login', {
                username,
                password
            });
            localStorage.setItem('token', res.data.token);
            alert('Login Successful');
            navigate('/dashboard');

        } catch (error) {
            alert(error?.data?.msg || 'Login Failed');
        }
    };

  return (
    <div className='loginUser'>
    <h2>Login User</h2>
    <form onSubmit={handleSubmit}>
            <label htmlFor="username">UserName:</label>
            <input type="text" value={username}  onChange={(e) => setUserName(e.target.value)}/>
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />

            <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default Login