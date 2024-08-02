import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from './AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Button onClick={logout} variant="contained" color="secondary">
      Logout
    </Button>
  );
};

export default Logout;