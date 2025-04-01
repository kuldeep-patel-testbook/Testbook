import React, { useState } from 'react'
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("trigger");
        try {
            const res = await axios.post(`${API_BASE_URL}/register`, {name, email, password});
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.message?.data?.error || "Error Register User");
        }
    };

    return (
        <div className='register'>
            <h2>User Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div><br />
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div><br />
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div><br /><br />
                <button type='submit'>Register</button>
            </form>
            <p>{message}</p></div>
    )
}

export default Register