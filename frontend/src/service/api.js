import axios from 'axios';
import 'dotenv';

const api = axios.create({
  // baseURL: process.env.API_URL,
  baseURL: 'http://localhost:3333',
});

export default api;
