import axios from 'axios';
import { toast } from 'react-toastify';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token to requests
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    
    if (response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
      toast.error('Session expired. Please login again.');
    } else if (response?.status === 403) {
      toast.error('Access denied. You do not have permission to perform this action.');
    } else if (response?.status === 404) {
      toast.error('Resource not found.');
    } else if (response?.status >= 500) {
      toast.error('Server error. Please try again later.');
    } else if (!response) {
      toast.error('Network error. Please check your connection.');
    }
    
    return Promise.reject(error);
  }
);

// API service methods
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (profileData) => api.put('/auth/profile', profileData),
  changePassword: (passwordData) => api.put('/auth/change-password', passwordData),
  getUsers: (params) => api.get('/auth/users', { params }),
  updateUserPermissions: (userId, permissions) => 
    api.put(`/auth/users/${userId}/permissions`, { permissions }),
  updateUserStatus: (userId, isActive) => 
    api.put(`/auth/users/${userId}/status`, { isActive }),
};

export const patientsAPI = {
  create: (patientData, files) => {
    const formData = new FormData();
    
    // Append patient data
    Object.keys(patientData).forEach(key => {
      if (typeof patientData[key] === 'object' && patientData[key] !== null) {
        formData.append(key, JSON.stringify(patientData[key]));
      } else {
        formData.append(key, patientData[key]);
      }
    });
    
    // Append files
    if (files && files.length > 0) {
      files.forEach(file => {
        formData.append('patientDocuments', file);
      });
    }
    
    return api.post('/patients', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  search: (params) => api.get('/patients/search', { params }),
  getById: (id) => api.get(`/patients/${id}`),
  update: (id, patientData, files) => {
    const formData = new FormData();
    
    Object.keys(patientData).forEach(key => {
      if (typeof patientData[key] === 'object' && patientData[key] !== null) {
        formData.append(key, JSON.stringify(patientData[key]));
      } else {
        formData.append(key, patientData[key]);
      }
    });
    
    if (files && files.length > 0) {
      files.forEach(file => {
        formData.append('patientDocuments', file);
      });
    }
    
    return api.put(`/patients/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  getDemographics: (id) => api.get(`/patients/${id}/demographics`),
  addNote: (id, note) => api.post(`/patients/${id}/notes`, { note }),
  updateStatus: (id, status) => api.put(`/patients/${id}/status`, { status }),
  getRecent: (limit) => api.get('/patients/recent', { params: { limit } }),
};

export const appointmentsAPI = {
  create: (appointmentData) => api.post('/appointments', appointmentData),
  getAll: (params) => api.get('/appointments', { params }),
  getById: (id) => api.get(`/appointments/${id}`),
  update: (id, appointmentData) => api.put(`/appointments/${id}`, appointmentData),
  checkIn: (id, vitals) => api.post(`/appointments/${id}/checkin`, { vitals }),
  getAvailableSlots: (params) => api.get('/appointments/slots/available', { params }),
  getStats: (params) => api.get('/appointments/stats', { params }),
};

export const proceduresAPI = {
  getAll: (params) => api.get('/procedures', { params }),
  create: (procedureData) => api.post('/procedures', procedureData),
  update: (id, procedureData) => api.put(`/procedures/${id}`, procedureData),
  getById: (id) => api.get(`/procedures/${id}`),
};

export const physiciansAPI = {
  getAll: (params) => api.get('/physicians', { params }),
  create: (physicianData) => api.post('/physicians', physicianData),
  update: (id, physicianData) => api.put(`/physicians/${id}`, physicianData),
  getById: (id) => api.get(`/physicians/${id}`),
};

export const resourcesAPI = {
  getAll: (params) => api.get('/resources', { params }),
  create: (resourceData) => api.post('/resources', resourceData),
  update: (id, resourceData) => api.put(`/resources/${id}`, resourceData),
  getById: (id) => api.get(`/resources/${id}`),
};

export default api;