import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AppointmentCalendar from './components/Appointments/AppointmentCalendar';
import PatientRegistration from './components/Patients/PatientRegistration';
import PatientSearch from './components/Patients/PatientSearch';
import PatientDetails from './components/Patients/PatientDetails';
import MastersManagement from './components/Masters/MastersManagement';
import LoadingSpinner from './components/UI/LoadingSpinner';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  const { loading, isAuthenticated } = useAuth();

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
        <p style={{ marginTop: '1rem', color: '#666' }}>Loading application...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
          } 
        />
        
        {/* Private Routes */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<AppointmentCalendar />} />
          <Route path="patients">
            <Route index element={<Navigate to="search" replace />} />
            <Route path="register" element={<PatientRegistration />} />
            <Route path="search" element={<PatientSearch />} />
            <Route path=":id" element={<PatientDetails />} />
          </Route>
          <Route path="masters" element={<MastersManagement />} />
        </Route>

        {/* Default redirect */}
        <Route 
          path="*" 
          element={
            isAuthenticated ? 
              <Navigate to="/dashboard" replace /> : 
              <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;