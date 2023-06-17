import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.ezfrontend.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors: Mình muốn làm 1 cái gì đó cho tất cả các request hoặc là tất cả các response thì mình gắn Interceptors này vào

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data; // Chỉ lấy data từ cái response. Còn các dữ liệu khác trong response không quan tâm
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
