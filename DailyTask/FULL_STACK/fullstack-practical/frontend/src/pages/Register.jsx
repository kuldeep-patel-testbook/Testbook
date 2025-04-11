import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5100/api/users/register', {
                username,
                password
            });
            alert('Registered Successfully');
            navigate('/');
        } catch (error) {
            alert(error.response?.data?.msg || 'Registration Failed');
        }
    }

  return (
    <div className='registerUser'>
        <h2>Register User</h2>
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

export default Register