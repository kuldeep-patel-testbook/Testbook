import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password
      });

      // If registration is successful (status code 201)
      if (res.status === 201) {
        setSuccess(true);
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error("Register Error:", error);
      alert(error.response?.data || "Failed to register");
    }
  };

  return (
    <div className="login-container">
      <h2>Doctor Register</h2>
      {success && <p style={{ color: "green" }}>Registered successfully! You can now log in.</p>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
