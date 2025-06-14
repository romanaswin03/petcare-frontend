import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  console.log('Token from localstorage:', token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }else{
    config.headers.Authorization = 'none';
  }
  return config;
}, error => Promise.reject(error));

export default api;