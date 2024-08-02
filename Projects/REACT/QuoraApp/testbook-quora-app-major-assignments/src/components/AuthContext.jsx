import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser && storedUser.password === password) {
      setIsAuthenticated({ email });
      localStorage.setItem('auth', JSON.stringify({ email }));
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  const signup = (email, password) => {
    localStorage.setItem(email, JSON.stringify({ email, password }));
    setIsAuthenticated({ email });
    localStorage.setItem('auth', JSON.stringify({ email }));
    navigate('/home');
  };

  const logout = () => {
    setIsAuthenticated(null);
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);