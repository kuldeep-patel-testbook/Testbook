import React, { useState } from 'react'
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_BASE_URL}/login`, {email, password});
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user);
        } catch (error) {
            setMessage(error.response?.data?.error || "Error logging in");
        }
    };

  return (
    <div className='login'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <input type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="field">
                <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button type='submit'>Login!</button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default login