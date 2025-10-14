import axios from 'axios';
import toast from 'react-hot-toast';

const axiosInstance = axios.create({
  baseURL: '', 
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  }
});

axiosInstance.interceptors.request.use(
  config => {
    let token = localStorage.getItem('authToken');
    if(!token)
      token = sessionStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    config.headers['Accept-Language'] = localStorage.getItem('lang') || 'en' ;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // if(authCheck())
      //   toast.error('Session expired. Redirecting to login...', {duration:3000});
      // else
      //   toast.error('Please log in to continue.', {duration:3000})
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      // setTimeout(() => {
      //   window.location.href = '/login';
      // }, 2000);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;