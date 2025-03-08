// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/register', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
