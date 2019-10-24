import axios from 'axios';
import 'dotenv';

const api = axios.create({
  // baseURL: process.env.API_URL,
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
