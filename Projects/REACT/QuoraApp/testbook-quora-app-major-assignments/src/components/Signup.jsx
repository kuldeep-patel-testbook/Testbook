import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import { useAuth } from './AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password);
  };

  return (
    <Container maxWidth="sm">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default Signup;