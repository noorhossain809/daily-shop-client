import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 150000,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log("Api is calling");
  return {
    ...config,
    headers: {
      
      Authorization: JSON.parse(
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        JSON.parse(localStorage.getItem('persist:root') || '').auth
      )?.data.token,
    },
    
};
}, function (error) {
  // Do something with request error
  console.log("Api is calling 2", error);
  return Promise.reject(error.response.data);
});

const responseBody = (response: AxiosResponse) => response.data.data;
console.log('responseBody', responseBody);

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) =>
    instance.post(url, body).then(responseBody),
  patch: (url: string, body: object) =>
    instance.patch(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};
export default requests;
