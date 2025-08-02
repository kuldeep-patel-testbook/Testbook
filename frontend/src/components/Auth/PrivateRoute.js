import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoadingSpinner from '../UI/LoadingSpinner';

const PrivateRoute = ({ children, requiredPermission, requiredRole }) => {
  const { isAuthenticated, loading, hasPermission, hasRole } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}>
        <LoadingSpinner size="large" />
        <p style={{ marginTop: '1rem', color: '#666' }}>Authenticating...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check specific permission if required
  if (requiredPermission) {
    const [module, action] = requiredPermission.split(':');
    if (!hasPermission(module, action)) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column'
        }}>
          <h2>Access Denied</h2>
          <p>You don't have permission to access this page.</p>
        </div>
      );
    }
  }

  // Check specific role if required
  if (requiredRole && !hasRole(requiredRole)) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}>
        <h2>Access Denied</h2>
        <p>Your role doesn't have access to this page.</p>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;