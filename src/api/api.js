import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://176.37.226.184:8009',
  withCredentials: true,
});

export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  api.defaults.headers.common.Authorization = ``;
};
