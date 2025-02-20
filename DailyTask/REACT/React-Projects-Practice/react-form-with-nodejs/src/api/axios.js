import axios from 'axios';

const API = axios.create({ 
    baseURL: 'https://testbookreactnodecrud.onrender.com/api/users',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default API;