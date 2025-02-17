import axios from 'axios';

const API = axios.create({ 
    baseURL: 'http://localhost:3200/api/users',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default API;